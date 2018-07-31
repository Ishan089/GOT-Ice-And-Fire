import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


import { Observable, observable } from 'rxjs'; 
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CharacterHttpService {

  public allChar;
  public baseUrl = 'https://www.anapioficeandfire.com/api'

  constructor(private _http:HttpClient) {
    console.log("Book http service called")

   }
   public getAllChar():any{
    let myResponse = this._http.get(this.baseUrl+'/characters');
    console.log(myResponse);
    return myResponse;
  }

  public getSingleCharacterInformation(currentCharId): any {
    let myResponse = this._http.get(this.baseUrl+'/characters?url='+ currentCharId );
    console.log(myResponse);
    return myResponse;
    
  }

}
