import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss'],
})
export class StopComponent implements OnInit {

  constructor() {}

  ngOnInit() {} 

  //FAVORITE FUNCTION TO CHECK OR UNCHECK DIFFERENT STOPS
  isFavorite(stop) {

    let stopId = stop.Station.id;
    //CREATION OF LOCALSTORAGE
    let favString = localStorage.getItem("favArray");
    let favorites = JSON.parse(favString);

    //CHECK FAVORITES
    if (stop.fav === 'heart-empty') {
      stop.fav = "heart";
      console.log(favorites);
      //CREATE ARRAY "FAVORITES" IF NOT CREATED BEFORE
      if (!favorites) {
        favorites = [stopId]; //crear array con parametro id
      }
      //INCLUDE THIS "STOPID" TO "FAVORITES" ARRAY
      else {
        if (!favorites.includes(stopId)) {
          favorites.push(stopId);
        }
      }
    }
    //UNCHECK FAVORITES
    else {
      stop.fav = "heart-empty";
      //CHECK IF "FAVORITES" ARRAY  IS CREATED AND HAS A VALID "STOPID"
      if (favorites && favorites.includes(stopId)) {
        favorites.splice(favorites.indexOf(stopId), 1);
      }
    }
    localStorage.setItem("favArray", JSON.stringify(favorites));
  }

  
}
