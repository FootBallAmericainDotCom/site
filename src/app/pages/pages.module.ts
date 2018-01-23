import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { NewsFranceComponent } from './news-france/news-france.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { EquipeFranceComponent } from './equipe-france/equipe-france.component';
import { FlagComponent } from './flag/flag.component';
import { CalendrierEliteComponent } from './calendrier-elite/calendrier-elite.component';
import { ClassementEliteComponent } from './classement-elite/classement-elite.component';
import { CalendrierCasqueOrComponent } from './calendrier-casque-or/calendrier-casque-or.component';
import { ClassementCasqueOrComponent } from './classement-casque-or/classement-casque-or.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
  	DashboardComponent,
  	NewsComponent,
  	NewsFranceComponent,
  	ArticleCommentsComponent,
  	EquipeFranceComponent,
  	FlagComponent,
  	CalendrierEliteComponent,
  	ClassementEliteComponent,
  	CalendrierCasqueOrComponent,
  	ClassementCasqueOrComponent
  ]
})

export class PagesModule { }