import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FizzbuzzService } from './services/fizzbuzz.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variable definitions
  title = 'pruebatecnica';
  display: string[];
  clicked = false;
  clickedsingle = false;
  singledisplay = '';
  noValidated = false;
  noValidatedSingle = false;

  // constructor
  constructor(private fizzservice: FizzbuzzService) {
   }
  
   // show info method display the full list of value in range of firstIndex and firstIndex + 10
  showInfo( firstIndex: number, event: Event) {

    try {
      event.preventDefault();
      if (firstIndex >= 0 ) {
        this.noValidated = true;
        this.clicked = true;
        this.clickedsingle = false;
        this.display = this.fizzservice.fizzFunction(firstIndex);
      } else {
        this.noValidated = false;
      }
    } catch (error) {
      console.log('an error has ocurred', error.name)
    }
    console.log(this.display);
   }

   // show single display of the function result using the number that has been passed as a parameter
   showSingle(single: number, event: Event) {
    // tslint:disable-next-line: deprecation
    try {
      event.preventDefault();
      if (single >= 0) {
      this.clickedsingle = true;
      this.noValidatedSingle = true;
      this.clicked = false;
      this.singledisplay = this.fizzservice.singleFizz(single);
    } else {
      this.noValidatedSingle = false;
    }
    } catch (error) {
      console.log('an error has ocurred', error.name)
    }
   }


}
