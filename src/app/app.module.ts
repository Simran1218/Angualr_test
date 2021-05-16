import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ItemsComponent } from './items/items.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    ItemsComponent,
    DatadrivenComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
