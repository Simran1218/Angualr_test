import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

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


}
