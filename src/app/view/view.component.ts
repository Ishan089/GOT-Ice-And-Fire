import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() {
    console.log("Book-View constructor is called")

   }

  ngOnInit() {

  }

}
