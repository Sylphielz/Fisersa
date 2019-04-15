import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  
  noMoreTuto(){
    localStorage.setItem("tutorial", "true");
    this.modalCtrl.dismiss();
  }
}
