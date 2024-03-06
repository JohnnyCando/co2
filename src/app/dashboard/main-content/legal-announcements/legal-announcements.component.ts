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
import { ModalLegalAnnouncementsEditorComponent } from '../modals/modal-legal-announcements-editor/modal-legal-announcements-editor.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';

@Component({
  selector: 'app-legal-announcements',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    LimitCharactersPipe,
    AngularMaterialModule
  ],
  templateUrl: './legal-announcements.component.html',
  styleUrl: './legal-announcements.component.scss'
})
export class LegalAnnouncementsComponent {
  public legalAnnouncementsInfo = new MatTableDataSource<TextView>()
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
      this.legalAnnouncementsInfo.data = text.filter((text) => text.type_string === 'announcements_acciona')
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
    this.displayedColumns.push('actions')
  }

  fillTable() {
    this.textService.getItems().subscribe((text: TextView[]) => {
      this.legalAnnouncementsInfo.data = text.filter((text) => text.type_string === 'announcements_acciona')
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.legalAnnouncementsInfo.filter = filterValue.trim().toLowerCase();

  //   if (this.legalAnnouncementsInfo.paginator) {
  //     this.legalAnnouncementsInfo.paginator.firstPage();
  //   }
  // }

  ngAfterViewInit() {
    setTimeout(() => this.legalAnnouncementsInfo.paginator = this.paginator, 1500);
  }

  mapLanguage(lang: string) {
    return this.utilsService.mapLanguage(lang)
  }

  openModal(legalAnnouncementsText?: TextView, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalLegalAnnouncementsEditorComponent, {
      height: '80vh',
      width: '50vw',
      data: {
        modelData: legalAnnouncementsText,
        isEdit
      } as unknown as ModalDataRecomendation
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  deleteRow(legalAnnouncementsText: TextView) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.utilsService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.textService.deleteItem(legalAnnouncementsText.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar el aviso legal:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }
}
