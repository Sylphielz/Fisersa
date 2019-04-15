import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MainService } from 'src/assets/Services/main.service';
import 'leaflet/dist/leaflet.css';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {
  public loadMap;
  public stops: any = []; //markers
  public shapes: any = []; //polylines
  routeId;

  constructor(
    private navParams: NavParams,
    private mainService: MainService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.routeId = this.navParams.data.routeId;
    this.reloadMap();   
    this.getStopsByRoute(this.routeId);
  }
  closeModal(){
    this.modalCtrl.dismiss();
  }
  reloadMap() {
    setTimeout(() => this.loadMap = true, 250);
  }

  getStopsByRoute(routeId){ 
    console.log(routeId);
    this.mainService.getStopsByRoute(routeId).subscribe(
      result => {
        if(result) {
          result.Connection.map(
            item => {
              this.stops.push(item.Start);
              this.shapes.push(item.Waypoint);
            }
          );
          this.stops.push(result.Connection[result.Connection.length -1].Stops);
          console.log(result.Connection);
        }
        console.log(this.stops);

      }
    );
    
  }


}
