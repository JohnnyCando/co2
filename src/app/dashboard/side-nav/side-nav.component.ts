import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmDialogData } from '../../shared/confirm-dialog/confirm-dialog.component';
import { UtilsService } from '../../core/services/utils.service';
import { of, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../core/services/user.service';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalGlobalConfigEditorComponent } from '../main-content/modals/modal-global-config-editor/modal-global-config-editor.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Output() tabSelected = new EventEmitter<number>();

  public tabs: {label: string; link: string}[] = [
    {label: 'Proyectos', link: 'projects'},
    {label: 'Recomendaciones', link: 'recommendations'},
    {label: 'Preguntas Frecuentes', link: 'frequent-questions'},
    // {label: 'Términos y Condiciones', link: 'terms-conditions'},
    {label: 'Política de Privacidad', link: 'polocies-privacy'},
    {label: 'Aviso Legal', link: 'legal-announcement'},
    {label: 'Usuarios', link: 'users'},
  ]

  constructor(
    private confirmDialogService: UtilsService,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router,
    private matDialog: MatDialog,
  ) {}

  tabChanged(tabIndex: number) {
    this.tabSelected.emit(tabIndex);
  }

  logout() {
    const dialogData: ConfirmDialogData = {
      title: 'Deslogueo',
      message: '¿Estás seguro de que quieres salir de tu cuenta?',
    };

    this.confirmDialogService.openConfirmDialog(dialogData).pipe(
      switchMap((result: boolean) => {
        if (result) {
          this.userService.logout();
          return of(true)
        }
        return of(false)
      })
    ).subscribe((eliminado) => {
      if (eliminado) {
        // this.router.navigate(['/authenticate'])
        this.snackBar.open('Se ha deslogueado correctamente', 'Cerrar', {
          duration: 3000,
        });
      } else {
        // La confirmación fue falsa o hubo un error en la eliminación
        console.log('Cancelado o error en la eliminación');
      }
    });
  }

  openModalCredits() {
    const dialogRef = this.matDialog.open(ModalGlobalConfigEditorComponent, {
      height: '60vh',
      width: '50vw',
    });
  }

}
