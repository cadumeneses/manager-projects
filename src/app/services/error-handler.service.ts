import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handlerError<T>(operation = "operation", result?: T){
    return (error: any): Observable<T> => {
      console.log(`${operation} falied: ${error.menssage}`);
      return of(result as T)
    }
  }
}
