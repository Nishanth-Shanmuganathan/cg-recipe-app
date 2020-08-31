import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule
];
@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules],
})
export class MaterialModule { }
