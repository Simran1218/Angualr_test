import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent implements OnInit {
  title = "Welcome To my page"
  serveCreationStatus = 'No servewas created!';
  activeId = 1;
  serveStatus: string = 'offine';

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
}
