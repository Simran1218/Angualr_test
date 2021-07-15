import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  genders = ['male', 'female'];

  @ViewChild('signupForm')
  sgnForm!: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.sgnForm.value);
  }
}
