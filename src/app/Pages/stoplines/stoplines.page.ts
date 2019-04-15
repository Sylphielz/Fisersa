import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoutesComponent } from 'src/app/Components/routes/routes.component';

@Component({
  selector: 'app-stoplines',
  templateUrl: './stoplines.page.html',
  styleUrls: ['./stoplines.page.scss'],
})
export class StoplinesPage implements OnInit {

  public toggled: boolean = false;
  public toggledl2: boolean = false;
  public toggledl3: boolean = false;
  public toggledle: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    ) {}

  ngOnInit() {
    this.toggleAll();
  }

  async openRouteMap(id){
    
    const routeMapModal = await this.modalCtrl.create({
      component: RoutesComponent,
      componentProps:{
        routeId: id,
      }
    });
    console.log(id);
    return await routeMapModal.present();

    
  }

toggleAll(){
  this.toggled = false;
  this.toggledl2 = false;
  this.toggledl3 = false;
  this.toggledle = false;
}
  //TOGGLE 
  public toggle(): void { this.toggled = !this.toggled; }
  public toggle2(): void { this.toggledl2 = !this.toggledl2; }
  public toggle3(): void { this.toggledl3 = !this.toggledl3; }
  public toggle4(): void { this.toggledle = !this.toggledle; }
}
