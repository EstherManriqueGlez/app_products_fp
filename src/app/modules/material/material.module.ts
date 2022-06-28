import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }