import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';


import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    HttpModule ,
    AppRoutingModule ,
    NoopAnimationsModule ,
    MaterialModule ,
    ComponentsModule ,
    PagesModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
