import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Conge } from './conge';
    
@Injectable({
  providedIn: 'root'
})
export class CongeService {
    
  private apiURL = "http://localhost:8000/apiconge";
      
  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

   
    return this.httpClient.get(this.apiURL + '/conges/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  create(conge:Conge): Observable<any> {

   
    return this.httpClient.post(this.apiURL + '/conges/create', JSON.stringify(conge), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {

  
    return this.httpClient.get(this.apiURL + '/conges/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id:number, conge:Conge): Observable<any> {

  
    return this.httpClient.put(this.apiURL + '/conges/' + id, JSON.stringify(conge), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }
       
  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/conges/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}