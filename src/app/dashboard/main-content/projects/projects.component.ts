import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { ProjectService } from '../../../core/services/project.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalDataProject, ModalProjectEditorComponent } from '../modals/modal-project-editor/modal-project-editor.component';
import { ConfirmDialogData } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { UtilsService } from '../../../core/services/utils.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  public projectsInfo = new MatTableDataSource<Project>()
  public displayedColumns: string[] = ['identify_lang_project_id', 'name', 'email', 'lang'];
  public isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private projectService: ProjectService,
    private matDialog: MatDialog,
    private utilsService: UtilsService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.projectService.getItems().subscribe((projects: Project[]) => {
      this.isLoading = false
      this.projectsInfo.data = projects
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
    })
    this.displayedColumns.push('activate')
    this.displayedColumns.push('actions')
  }

  fillTable() {
    this.projectService.getItems().subscribe((projects: Project[]) => {
      this.projectsInfo.data = projects
    })
  }

  mapLanguage(lang: string) {
    return this.utilsService.mapLanguage(lang)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.projectsInfo.filter = filterValue.trim().toLowerCase();

    if (this.projectsInfo.paginator) {
      this.projectsInfo.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.projectsInfo.paginator = this.paginator, 1500);
  }

  openModalProject(project?: Project, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalProjectEditorComponent, {
      height: '80vh',
      width: '80vw',
      data: {
        modelData: project,
        isEdit
      } as unknown as ModalDataProject 
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  // openModalCredits() {
  //   const dialogRef = this.matDialog.open(ModalGlobalConfigEditorComponent, {
  //     height: '60vh',
  //     width: '40vw',
  //   });
  //   dialogRef.afterClosed().subscribe(() => {
  //     this.cdr.detectChanges();
  //   });
  // }

  deleteProject(project: Project) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.utilsService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.projectService.deleteItem(project.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar el proyecto:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }

  public toggleActivationProject(event: any, project: Project) {
    console.log(event)
    let options = {
      id: project.id || '',
      data: {
        is_active: event.checked
      }
    }
    this.projectService.updateItem(options).subscribe(() => {
      this.fillTable();
      this.cdr.detectChanges();
    })
  }
}

