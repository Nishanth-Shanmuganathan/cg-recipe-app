import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './home/card/card.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];
@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
