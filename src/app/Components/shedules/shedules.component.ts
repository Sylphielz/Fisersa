import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-shedules',
  templateUrl: './shedules.component.html',
  styleUrls: ['./shedules.component.scss'],
})
export class ShedulesComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController) {}



  ngOnInit() {
   }
  
  
  showPdf(){}
  

  close(){
      this.modalCtrl.dismiss();
    }
}