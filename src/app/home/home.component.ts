import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Welcome To my page"
  serveCreationStatus = 'No servewas created!';
  activeId = 1;
  serveStatus: string = 'offine';
  authService: any;

  getServeStatus(){
    return this.serveStatus;
  }

  constructor() {
    this.serveStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getcolor(){
    return this.serveStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
   }

  onCreateServe(){
    this.serveCreationStatus = 'is created!';
  }

  onLogout(){
    this.authService.logout();
  }
}
