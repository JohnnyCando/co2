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
import { ModalDataRecomendation } from '../modals/modal-recomendation-editor/modal-recomendation-editor.component';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { LimitCharactersPipe } from '../../../shared/pipes/limit-characters.pipe';
import { TextView } from '../../../core/models/text.model';
import { TextService } from '../../../core/services/text.service';
import { ModalTermsConditionsEditorComponent } from '../modals/modal-terms-conditions-editor/modal-terms-conditions-editor.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';


@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    LimitCharactersPipe,
    AngularMaterialModule
  ],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {
  public termsConditionsInfo = new MatTableDataSource<TextView>()
  public displayedColumns: string[] = ['identify_lang_text_view_id', 'name', 'lang'];
  public isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private textService: TextService,
    private matDialog: MatDialog,
    private utilsService: UtilsService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.textService.getItems().subscribe((text: TextView[]) => {
      this.isLoading = false
      this.termsConditionsInfo.data = text.filter((text) => text.type_string === 'terms_conditions')
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
    this.displayedColumns.push('actions')
  }

  fillTable() {
    this.textService.getItems().subscribe((text: TextView[]) => {
      this.termsConditionsInfo.data = text.filter((text) => text.type_string === 'terms_conditions')
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.termsConditionsInfo.filter = filterValue.trim().toLowerCase();

  //   if (this.termsConditionsInfo.paginator) {
  //     this.termsConditionsInfo.paginator.firstPage();
  //   }
  // }

  ngAfterViewInit() {
    setTimeout(() => this.termsConditionsInfo.paginator = this.paginator, 1500);
  }

  mapLanguage(lang: string) {
    return this.utilsService.mapLanguage(lang)
  }

  openModal(termAndConditionText?: TextView, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalTermsConditionsEditorComponent, {
      height: '80vh',
      width: '50vw',
      data: {
        modelData: termAndConditionText,
        isEdit
      } as unknown as ModalDataRecomendation
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  deleteRow(termAndConditionText: TextView) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.utilsService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.textService.deleteItem(termAndConditionText.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar el término y condición:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }
}
