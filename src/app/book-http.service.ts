import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';


import { Observable, observable } from 'rxjs'; 
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {

  //declare the dummy book variable here

  public allBooks;
  public authToken = 'Y2Q3NWQ1NGNiZjhmYmJjNjA2ZDZlNjRmNDRiNjFlMzE0ZDRhYzRiMzVkM2JlM2Q1ZjE1OTIwOTI1MGExYzc4NjA1Y2U0NDkyZmE5ZGI2Zjg1Yzk1ZDZlODcwOTM1YThjZWZkNWVmZDI2ODlkZmY3Y2Q0ZDYyMGVjYjUxM2I4NjVhOA=='
  public baseUrl= 'https://www.anapioficeandfire.com/api'

  public allChar;
  public baseUrll = 'https://www.anapioficeandfire.com/api/characters'

  constructor(private _http:HttpClient) {
    console.log("Book http service called")
   } 

   public getAllBooks(): any{

    let myResponse = this._http.get(this.baseUrl+'/books');
    console.log(myResponse);
    return myResponse;

   }

   public getSingleBlogInformation(currentBookName): any {
    let myResponse = this._http.get(this.baseUrl + '/books?name=' + currentBookName)
    return myResponse;
  }




}
