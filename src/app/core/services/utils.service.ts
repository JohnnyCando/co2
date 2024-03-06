import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../shared/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';

import { AngularEditorConfig } from "@kolkov/angular-editor";

export const languagesMap: {[key: string]: string} = {
  'es': 'Castellano',
  'en': 'Inglés',
  'ca': 'Catalán',
  'eu': 'Euskera',
  'gl': 'Gallego'
}

export const editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '15vh',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Inserte texto aquí...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    {class: 'arial', name: 'Arial'},
    {class: 'times-new-roman', name: 'Times New Roman'},
    {class: 'calibri', name: 'Calibri'},
    {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  ],
  customClasses: [],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['customClasses'],
    ['link', 'unlink', 'insertVideo', 'insertImage', 'insertHorizontalRule'],
    ['toggleEditorMode'],
    ['subscript', 'superscript']
  ]
}

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(data: ConfirmDialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data,
    });

    return dialogRef.afterClosed();
  }

  getFlagUrl(langCode: string): string {
    return `/assets/flags/${langCode}.png`
  }

  mapLanguage(lang: string) {
    return languagesMap[lang]
  }

  get getEditorConfig() {
    return editorConfig;
  }
}
