import { flatten } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  allowNewServe = false;
  myform: any;
  email: FormControl | undefined;
  // emailDomainValidator: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;

  constructor() {
    setTimeout(() => {
      this.allowNewServe = true;
    }, 70000);
   }


  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  addPage(){
    console.log("pages is loaded",this.myform.value)
  }
  createForm() {
    email:this.email
    throw new Error('Method not implemented.');
  }
  createFormControls() {
    this.email = new FormControl("", Validators.required)
    throw new Error('Method not implemented.');
  }
  genders = ['Male', 'Female', 'Others'];
  model = new Hero(18, '', this.genders[0], '');
  submitted = false;

onSubmit() { this.submitted = true; }
isavailable = true;
myClickFunction(event: any) {
   alert("Do you want to submit");
   console.log(event);

}
}
