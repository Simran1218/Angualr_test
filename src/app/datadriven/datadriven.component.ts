import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent implements OnInit {
  
  // myform: any;
  // email: FormControl | undefined
  // // emailDomainValidator: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;

   constructor() { }

   ngOnInit(): void {
  //   this.createFormControls();
  //   this.createForm();
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
