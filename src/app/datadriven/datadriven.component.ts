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
  // myform: any;
  // email: FormControl | undefined
  // // emailDomainValidator: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;

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
  //   this.createFormControls();
  //   this.createForm();
   }
   onCreateServe(){
    this.serveCreationStatus = 'is created!';
    }

  // addPage(){
  //   console.log("pages is loaded",this.myform.value)
  // }
  // createForm() {
  //   email:this.email
  //   throw new Error('Method not implemented.');
  // }
  // createFormControls() {
  //   this.email = new FormControl("", Validators.required)
  //   throw new Error('Method not implemented.');
  // }




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


}
