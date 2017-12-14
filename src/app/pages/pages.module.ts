import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
  	DashboardComponent,
  	NewsComponent
  ]
})

export class PagesModule { }