import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class FizzbuzzService {
  constructor() { 
  }

  fizzFunction(firstnumber: number){
    console.log(firstnumber)
    let divthree: number;
    let divfive: number;
    let finalval: string;
    let finalresult: string[] = [];
    let i: number = firstnumber;
    let lastindex: number = +firstnumber + +100;

    for ( i ; i < lastindex; i++ ) {
        finalval = '';
        divthree = i % 3 ;
        divfive = i % 5;
        if ( divthree == 0 ) finalval += "fizz"; 
        if ( divfive == 0 )  finalval += "buzz"; 
        if ( divfive != 0 && divthree != 0)  finalval += i.toString(); 
        
        finalresult.push(finalval)
    }
    
    return finalresult;
}

singleFizz(single: number) {
  let divthree: number = single % 3 ;;
  let divfive: number = single % 5;;
  let finalval: string = "";

  if ( divthree == 0 ) finalval += "fizz"; 
  if ( divfive == 0 )  finalval += "buzz";
  if ( divfive != 0 && divthree != 0)  finalval += single.toString();

  return finalval;
}
}
