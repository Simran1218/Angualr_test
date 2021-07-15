import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ItemsComponent } from './items/items.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // HttpClientModule


  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    ItemsComponent,
    DatadrivenComponent,
    TemplateFormComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
