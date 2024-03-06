import { Component, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { AngularMaterialModule } from '../angular-material.module';

@Component({
  selector: 'app-error-table',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './error-table.component.html',
  styleUrl: './error-table.component.scss'
})
export class ErrorTableComponent {
  displayedColumns: string[] = ['identifier', 'lang', 'message'];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<ErrorTableComponent>
  ) {}

  close() {
    this.bottomSheetRef.dismiss();
  }

}
