import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { BookHttpService } from '../book-http.service';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  public currentBook;

 

  constructor(private _route: ActivatedRoute, private router: Router, public bookHttpService:BookHttpService) {
    console.log("Book-View constructor is called")

   }

  ngOnInit() {
    console.log("Book-View ngOnInIt is called");
    //getting the blog id from the route
    let myBookName = this._route.snapshot.paramMap.get('name');
    console.log(myBookName);
    //calling the function to get the blog with this blogId out of over all array
    this.bookHttpService.getSingleBlogInformation(myBookName).subscribe(

      data=>{
        console.log("logging data");
        this.currentBook = data;
        console.log(data);

      },
      error=>{
        console.log("some error occured");
        console.log("error.errorMessage")
      }
    )
 }
  ngOnDestroy(){

  }

  }



  


