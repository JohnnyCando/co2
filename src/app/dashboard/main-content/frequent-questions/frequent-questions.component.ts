import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { UtilsService } from '../../../core/services/utils.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { FrequentQuestion } from '../../../core/models/frequent-question.model';
import { FrequentQuestionService } from '../../../core/services/frequent-question.service';
import { ModalDataFrequentQuestion, ModalFrequentQuestionEditorComponent } from '../modals/modal-frequent-question-editor/modal-frequent-question-editor.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ErrorTableComponent } from '../../../shared/error-table/error-table.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';

@Component({
  selector: 'app-frequent-questions',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './frequent-questions.component.html',
  styleUrl: './frequent-questions.component.scss'
})
export class FrequentQuestionsComponent {
  public frequentQuestionsInfo = new MatTableDataSource<FrequentQuestion>()
  public frequentQuestionsData!: FrequentQuestion[]
  public displayedColumns: string[] = ['identify_lang_frequently_question_id', 'title', 'order', 'lang'];
  public isLoading: boolean = true;
  public questionsOrderErrorsMap!: Map<number, FrequentQuestion[]>
  public questionsOrderErrors: any[] = []
  bottomSheetRef = {} as MatBottomSheetRef<ErrorTableComponent>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private frequentQuestionService: FrequentQuestionService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private utilsService: UtilsService,
    private bottomSheet: MatBottomSheet,
  ) {}

  ngOnInit(): void {
    this.frequentQuestionService.getItems().subscribe((frequentQuestions: FrequentQuestion[]) => {
      this.isLoading = false
      this.frequentQuestionsData = frequentQuestions
      this.frequentQuestionsInfo.data = this.orderByOrderNumber(this.frequentQuestionsData)
      this.checkOrder()
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
    this.displayedColumns.push('actions')
  }

  fillTable() {
    this.frequentQuestionService.getItems().subscribe((frequentQuestions: FrequentQuestion[]) => {
      this.frequentQuestionsData = frequentQuestions
      this.frequentQuestionsInfo.data = this.orderByOrderNumber(this.frequentQuestionsData)
      if(this.bottomSheet._openedBottomSheetRef) {
        this.bottomSheetRef.dismiss()
        this.bottomSheetRef.afterDismissed().subscribe(() => {
          this.checkOrder()
        })
      } else {
        this.checkOrder()
      }
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
  }

  orderByOrderNumber(dataArray: FrequentQuestion[]) {
    return dataArray.sort((a, b) => {
      const orderA = a.order_number !== undefined ? a.order_number : Number.MAX_SAFE_INTEGER;
      const orderB = b.order_number !== undefined ? b.order_number : Number.MAX_SAFE_INTEGER;
      if (orderA === orderB) {
        return dataArray.indexOf(a) - dataArray.indexOf(b);
    }
      return orderA - orderB;
    })
  }

  checkOrder() {
    this.questionsOrderErrors = []
    this.questionsOrderErrorsMap = new Map()

    for (const question of this.frequentQuestionsInfo.data) {
      if(question.order_number) {
        if (!this.questionsOrderErrorsMap.has(question.order_number)) {
          this.questionsOrderErrorsMap.set(question.order_number, [question])
        } else {
          this.questionsOrderErrorsMap.get(question.order_number)?.push(question)
        }
      }
    }

    for(const [order, questions] of this.questionsOrderErrorsMap.entries()) {
      if (questions.length > 1) {
        const firstQuestion = questions[0];
        questions.forEach(question => {
          let errorMessage
          if(question.identify_lang_frequently_question_id !== firstQuestion.identify_lang_frequently_question_id &&
            question.lang === firstQuestion.lang
          ) {
            errorMessage = `La pregunta con identificador '${firstQuestion.identify_lang_frequently_question_id}' ocupa la posición ${order}.`;
          }
          if(errorMessage) {
            let lang
            if(question.lang) {
              lang = this.mapLanguage(question.lang).toLowerCase()
            }
            this.questionsOrderErrors.push({
              identifier: question.identify_lang_frequently_question_id,
              lang: lang,
              error_message: errorMessage,
            })
          }
        }
        )
      }
    }
    if(this.questionsOrderErrors.length > 0){
      this.bottomSheetRef = this.bottomSheet.open(ErrorTableComponent, {
        data: this.questionsOrderErrors,
        hasBackdrop: false
      })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.frequentQuestionsInfo.filter = filterValue.trim().toLowerCase();

    if (this.frequentQuestionsInfo.paginator) {
      this.frequentQuestionsInfo.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.frequentQuestionsInfo.paginator = this.paginator, 1500);
  }

  mapLanguage(lang: string) {
    return this.utilsService.mapLanguage(lang)
  }

  openModal(frequentQuestions?: FrequentQuestion, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalFrequentQuestionEditorComponent, {
      height: '70vh',
      width: '50vw',
      data: {
        modelData: frequentQuestions,
        isEdit,
      } as unknown as ModalDataFrequentQuestion
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  deleteRow(frequentQuestions: FrequentQuestion) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.utilsService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.frequentQuestionService.deleteItem(frequentQuestions.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        console.log('cucu')
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar la pregunta frecuente:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }
}
