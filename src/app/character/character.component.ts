import { Component, OnInit } from '@angular/core';

import { CharacterHttpService } from "../character-http.service";


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public allChar;

  constructor(public characterHttpService: CharacterHttpService) {
    console.log("character component constructor called")

  }

  ngOnInit() {
    console.log("character Component ngOnInIt Called");


    this.allChar = this.characterHttpService.getAllChar().subscribe(
      data => {
        this.allChar = data;
        this.allChar.sort(function (a, b) {
          const cultureA = a.culture.toLowerCase(), cultureB = b.culture.toLowerCase();
          if (cultureA < cultureB) {
            return -1
          }
          if (cultureA > cultureB) {

            return 1;
          }
          return 0; //default return value (no sorting)
        });


        console.log(this.allChar);
        for (let char of this.allChar) {

        }
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }
}
