import { Component, OnInit, OnDestroy } from '@angular/core';
import {HouseHttpService } from "../house-http.service";


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit,OnDestroy {

  public allHouses=[];

  constructor(public houseHttpService: HouseHttpService) { 
    console.log("House component constructor called")

  }

  ngOnInit() {
    console.log("House Component ngOnInIt Called");

    this.allHouses = this.houseHttpService.getAllHouses().subscribe(
      data=>{
        console.log(data);
        this.allHouses = data;
        this.allHouses.sort(function (a, b) {
          const nameA = a.region.toLowerCase(), nameB = b.region.toLowerCase();
          if (nameA < nameB){
            return -1
          }
          if (nameA > nameB) {
 
            return 1;
            }
            return 0; //default return value (no sorting)
});
        
        
        for(let house of this.allHouses){
          console.log(house.name);
        }
        
      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
  
    )
  }

  ngOnDestroy() {
    console.log("Home Component Destroyed")
  }
 }
