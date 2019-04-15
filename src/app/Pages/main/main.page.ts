import { Component, OnInit } from '@angular/core';
import 'leaflet/dist/leaflet.css';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public loadMap;

  constructor(
  ) { }

  ngOnInit() {
  this.reloadMap();   
  }

  reloadMap() {
    setTimeout(() => this.loadMap = true, 250);
  }
}
