import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = "Welcome To my page"

  // @Input()
  // isFavourite  = false ; 
  // onClick() {
  //     this.isFavourite =!this.isFavourite;
  // }

}
