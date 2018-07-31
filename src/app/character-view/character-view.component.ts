import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CharacterHttpService } from "../character-http.service";


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})

export class CharacterViewComponent implements OnInit {
  public currentChar;

  constructor(private _route: ActivatedRoute, private router: Router, private characterHttpService:CharacterHttpService) {
    console.log("Character-View constructor is called")
 }

  ngOnInit() {
    console.log("Character-View ngOnInIt is called");

    //getting the char id from the route
    let myCharId = this._route.snapshot.paramMap.get('aliases');
    console.log(myCharId);

    this.characterHttpService.getSingleCharacterInformation(myCharId).subscribe(

      data=>{
        console.log(data);
        this.currentChar = data;
       

      },
      error=>{
        console.log("some error occured");
        console.log("error.errorMessage")
      }
    )

  }

}
