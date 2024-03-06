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
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';
import { ModalDataUser, ModalUserEditorComponent } from '../modals/modal-user-editor/modal-user-editor.component';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ScrollingModule,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public userInfo = new MatTableDataSource<User>([])
  public displayedColumns: string[] = ['name', 'email', 'role'];
  public loggedUser!: string | undefined;
  public isLoading: boolean = true;
  public viewAllUsers: boolean = true
  public usersData!: User[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private confirmDialogService: UtilsService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService.getItems().subscribe((users: User[]) => {
      this.isLoading = false
      this.usersData = users
      this.userInfo.data = this.usersData.filter((user: User) => user.role==='ADMIN')
      this.userInfo.paginator = this.paginator
    },
    (error: HttpErrorResponse) => {
      this.snackBar.open(error.error.message, 'Cerrar', {
        duration: 3000,
      });
      this.isLoading = false
    })
    this.displayedColumns.push('actions')

    this.userService.user.subscribe(user => {
      this.loggedUser = user?.id;
    })
  }

  fillTable() {
    this.userService.getItems().subscribe((users: User[]) => {
      this.isLoading = false
      this.usersData = users
      this.userInfo.data = this.usersData.filter((user: User) => user.role==='ADMIN')
      this.userInfo.paginator = this.paginator
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
      this.snackBar.open(error.error.message, 'Cerrar', {
        duration: 3000,
      });
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userInfo.filter = filterValue.trim().toLowerCase();

    if (this.userInfo.paginator) {
      this.userInfo.paginator.firstPage();
    }
    this.cdr.detectChanges()
  }

  filterViewAllUsers(event: any) {
    let isActive = event.target.checked;
    if(isActive) {
      this.userInfo.data = this.usersData.filter(user => user)
    } else {
      this.userInfo.data = this.usersData.filter((user: User) => user.role==='ADMIN')
    }
    this.cdr.detectChanges()
  }

  ngAfterViewInit() {
    setTimeout(() => this.userInfo.paginator = this.paginator, 1500);
  }

  openModal(text?: User, isEdit?: boolean) {
    const dialogRef = this.matDialog.open(ModalUserEditorComponent, {
      height: '40vh',
      width: '40vw',
      data: {
        modelData: text,
        isEdit
      } as unknown as ModalDataUser
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      this.fillTable()
      this.cdr.detectChanges();
    });
  }

  deleteRow(user: User) {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este elemento?',
    };

    this.confirmDialogService.openConfirmDialog(dialogData).pipe(
      filter(data => data === true),
      switchMap(() => this.userService.deleteItem(user.id))
    ).subscribe(
      () => {
        this.fillTable();
        this.cdr.detectChanges();
        this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al eliminar el usuario:', error);
        this.snackBar.open(error.message, 'Cerrar', { duration: 3000 });
      }
    );
  }
}
