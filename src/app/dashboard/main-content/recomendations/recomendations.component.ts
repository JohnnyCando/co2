import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { UtilsService } from '../../../core/services/utils.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecomendationService } from '../../../core/services/recomendation.service';
import { ModalDataRecomendation, ModalRecomendationEditorComponent } from '../modals/modal-recomendation-editor/modal-recomendation-editor.component';
import { Recomendation } from '../../../core/models/recomendation';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { LimitCharactersPipe } from '../../../shared/pipes/limit-characters.pipe';
import { AngularMaterialModule } from '../../../shared/angular-material.module';

@Component({
  selector: 'app-recomendations',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    LimitCharactersPipe,
    AngularMaterialModule
  ],
  templateUrl: './recomendations.component.html',
  styleUrl: './recomendations.component.scss'
})
export class RecomendationsComponent implements OnInit {
  public recomendationsInfo = new MatTableDataSource<Recomendation>()
  public displayedColumns: string[] = ['identify_lang_recommended_id', 'name', 'description_text', 'lang'];
  public isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private recomendationService: RecomendationService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.recomendationService.getItems().subscribe((recomendations: Recomendation[]) => {
      this.isLoading = false
      this.recomendationsInfo.data = recomendations
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
    this.displayedColumns.push('actions')
  }

  fillTable() {
    this.recomendationService.getItems().subscribe((recomendations: Recomendation[]) => {
      this.recomendationsInfo.data = recomendations
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recomendationsInfo.filter = filterValue.trim().toLowerCase();

    if (this.recomendationsInfo.paginator) {
      this.recomendationsInfo.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.recomendationsInfo.paginator = this.paginator, 1500);
  }

  mapLanguage(lang: string) {
    return this.utilsService.mapLanguage(lang)
  }

  openModal(recomendation?: Recomendation, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalRecomendationEditorComponent, {
      height: '80vh',
      width: '50vw',
      data: {
        modelData: recomendation,
        isEdit
      } as unknown as ModalDataRecomendation
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  deleteRow(recomendation: Recomendation) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.utilsService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.recomendationService.deleteItem(recomendation.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar la recomendación:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }
}
