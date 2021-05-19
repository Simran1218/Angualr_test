import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  myform: any;
  email: FormControl | undefined
  // emailDomainValidator: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;

  constructor() { }

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




  // emailDomainValidator(control: FormControl) {
  //   let email = control.value;
  //   if (email && email.indexOf("@") != -1) {
  //   let [_, domain] = email.split("@");
  //   if (domain !== "trigyn.com") {
  //   return {
  //   emailDomain: {
  //   parsedDomain: domain
  //   }
  //   }
  //   }
  //   }
  //   return null;
  //   }

  powers = ['Male', 'Female',
            'Others'];

  model = new Hero(18, '', this.powers[0], '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'distance',
                           'Rollover');
    console.log('My hero is called ' + myHero.name); 
    return myHero;
  }

   showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; 
  }

  isavailable = true;
myClickFunction(event: any) {
   alert("Do you want to submit");
   console.log(event);



}
changemonths(_event: any) {
alert("Change month  Dropdown");
}

}
