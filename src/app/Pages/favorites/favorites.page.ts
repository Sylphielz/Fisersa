import { MainService } from './../../../assets/Services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public favIds = [];
  favStops; //Id's of favorites
  stops = [];

  constructor(
    private _mainService: MainService,
  ) { }

  ngOnInit() {
    let favString = localStorage.getItem("favorites"); //"favorites" ESTO NUNCA SERA UN ARRAY, solo es para comprobar
    if(favString) {
      this.favIds = JSON.parse(favString); // parse quita las "" del string/objeto/etc
    }
    console.log(this.favIds);
    this.getAllStops();
  
  }

  getAllStops(){
    this._mainService.getAllStops().subscribe(
      result => {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          var id = parseInt(result[i].Station.id);
          if (this.favIds.includes(id)) {
            this.stops.push(result[i].Station); 
          }  
        }
        console.log(this.stops);        
      },
      error => {
        console.log(error);
      }
    );
    
  }
}
