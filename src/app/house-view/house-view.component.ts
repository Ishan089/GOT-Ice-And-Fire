import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import { HouseHttpService } from '../house-http.service';



@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {

  public currentHouse;

  constructor(private _route: ActivatedRoute, private router: Router, public houseHttpService:HouseHttpService) { }

  ngOnInit() {
    console.log("House NgOnInIt called")
        //getting the house id from the route
    let myHouseName = this._route.snapshot.paramMap.get('name');
    console.log(myHouseName);
    //calling the function to get the blog with this blogId out of over all array
    this.houseHttpService.getSingleHouse(myHouseName).subscribe(
      
      data=>{
        console.log("logging data");
        this.currentHouse = data;
        console.log(data);

      },
      error=>{
        console.log("some error occured");
        console.log("error.errorMessage")
      }
    )
 }
  }


