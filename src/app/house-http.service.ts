import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, observable } from 'rxjs'; 
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HouseHttpService {

  public allHouses;
  public baseUrl ="https://www.anapioficeandfire.com/api";

  constructor(public _http:HttpClient) {
    console.log("constructor calling");
   }
   public getAllHouses():any{
    let myResponse = this._http.get(this.baseUrl+ '/houses');
    console.log(myResponse);
    return myResponse;
  }

  public getSingleHouse(currentHouseName):any{
    let myResponse = this._http.get(this.baseUrl + '/houses?name='+ currentHouseName )
    return myResponse;
  }

}
