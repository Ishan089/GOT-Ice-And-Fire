import { Component, OnInit, OnDestroy } from '@angular/core';
import {BookHttpService } from "../book-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public allBooks=[]

  constructor(public bookHttpService:BookHttpService) {
    console.log("Home component constructor called")
   }

  ngOnInit() {
    console.log("Home Component ngOnInIt Called");
    //this.allBooks = this.bookHttpService.getAllBooks();

    this.allBooks =this.bookHttpService.getAllBooks().subscribe(

      data=>{
        this.allBooks = data;
        this.allBooks.sort(function (a, b) {
          const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB){
            return -1
          }
          if (nameA > nameB) {
 
            return 1;
            }
            return 0; //default return value (no sorting)
});


        console.log(this.allBooks);
        for(let book of this.allBooks){
          console.log(book.name);
    
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
