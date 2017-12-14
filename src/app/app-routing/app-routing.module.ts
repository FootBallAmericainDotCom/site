import { NgModule } from '@angular/core';
import { CommonModule , HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { NewsComponent } from '../pages/news/news.component'


const routes: Routes = [
{
	path: '',
	component: DashboardComponent,
},
{
	path: 'news',
	component: NewsComponent,
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