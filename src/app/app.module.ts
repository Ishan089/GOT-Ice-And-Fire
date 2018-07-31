import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CharacterComponent } from './character/character.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseComponent } from './house/house.component';
import { HouseViewComponent } from './house-view/house-view.component';

import { BookHttpService } from './book-http.service';
import { CharacterHttpService } from './character-http.service';
import { HouseHttpService } from './house-http.service';

import { FormsModule } from '@angular/forms';



import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module



const appRoutes: Routes = [

  {path: 'home',component: HomeComponent},
  
  {path: 'home/',component: HomeViewComponent},
  {path:'book/:name',component:HomeViewComponent},

  {path:'char',component:CharacterComponent},
  {path:'char/:name',component:CharacterViewComponent},
  
  {path:'house',component:HouseComponent},
  {path:'house/:name',component:HouseViewComponent}

  
  ]; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    HomeViewComponent,
    CharacterComponent,
    CharacterViewComponent,
    HouseComponent,
    HouseViewComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [BookHttpService,CharacterHttpService,HouseHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
