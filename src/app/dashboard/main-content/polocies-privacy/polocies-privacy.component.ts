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
import { ModalPoliciesPrivacyEditorComponent } from '../modals/modal-policies-privacy-editor/modal-policies-privacy-editor.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';

@Component({
  selector: 'app-polocies-privacy',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    LimitCharactersPipe,
    AngularMaterialModule
  ],
  templateUrl: './polocies-privacy.component.html',
  styleUrl: './polocies-privacy.component.scss'
})
export class PolociesPrivacyComponent {
  public policiesPrivacyInfo = new MatTableDataSource<TextView>()
  public displayedColumns: string[] = ['identify_lang_text_view_id', 'name', 'lang'];
  public isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private textService: TextService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.textService.getItems().subscribe((text: TextView[]) => {
      this.isLoading = false
      console.log(text)
      this.policiesPrivacyInfo.data = text.filter((text) => text.type_string === 'policies_privacy')
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
    this.displayedColumns.push('actions')
  }

  fillTable() {
    this.textService.getItems().subscribe((text: TextView[]) => {
      this.policiesPrivacyInfo.data = text.filter((text) => text.type_string === 'policies_privacy')
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.policiesPrivacyInfo.filter = filterValue.trim().toLowerCase();

  //   if (this.policiesPrivacyInfo.paginator) {
  //     this.policiesPrivacyInfo.paginator.firstPage();
  //   }
  // }

  ngAfterViewInit() {
    setTimeout(() => this.policiesPrivacyInfo.paginator = this.paginator, 1500);
  }

  mapLanguage(lang: string) {
    return this.utilsService.mapLanguage(lang)
  }

  openModal(policiesPrivacyText?: TextView, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalPoliciesPrivacyEditorComponent, {
      height: '80vh',
      width: '50vw',
      data: {
        modelData: policiesPrivacyText,
        isEdit
      } as unknown as ModalDataRecomendation
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  deleteRow(policiesPrivacyText: TextView) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.utilsService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.textService.deleteItem(policiesPrivacyText.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar la política de privacidad:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }
}
