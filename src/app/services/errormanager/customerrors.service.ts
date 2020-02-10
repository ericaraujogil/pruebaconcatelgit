import {ErrorHandler, Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CustomerrorsService {

  constructor() { }

  handleError(error){
    console.log(error)
    return error;
  }
}
