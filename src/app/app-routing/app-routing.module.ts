import { NgModule } from '@angular/core';
import { CommonModule , HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { NewsComponent } from '../pages/news/news.component';
import { NewsFranceComponent } from '../pages/news-france/news-france.component';
import { ArticleCommentsComponent } from '../pages/article-comments/article-comments.component';
import { EquipeFranceComponent } from '../pages/equipe-france/equipe-france.component';
import { FlagComponent } from '../pages/flag/flag.component';
import { CalendrierEliteComponent } from '../pages/calendrier-elite/calendrier-elite.component';
import { ClassementEliteComponent } from '../pages/classement-elite/classement-elite.component';
import { CalendrierCasqueOrComponent } from '../pages/calendrier-casque-or/calendrier-casque-or.component';
import { ClassementCasqueOrComponent } from '../pages/classement-casque-or/classement-casque-or.component';

const routes: Routes = [
{
	path: '',
	component: DashboardComponent,
},
{
	path: 'news',
	component: NewsComponent,
},
{
	path: 'france',
	component: NewsFranceComponent,
},
{
	path: 'france/equipe-de-france',
	component: EquipeFranceComponent,
},
{
	path: 'france/flag',
	component: FlagComponent,
},
{
	path: 'france/calendrier/elite',
	component: CalendrierEliteComponent,
},
{
	path: 'france/classement/elite',
	component: ClassementEliteComponent,
},
{
	path: 'france/calendrier/division-2',
	component: CalendrierCasqueOrComponent,
},
{
	path: 'france/classement/division-2',
	component: ClassementCasqueOrComponent,
},
{
	path: 'commentaires/:articleId',
	component: ArticleCommentsComponent,
},
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		// { provide: LocationStrategy, useClass: HashLocationStrategy },
	],
	exports: [
		RouterModule
	],

})
export class AppRoutingModule { }