import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-levels-tournaments-fut-adm',
  templateUrl: './levels-tournaments-fut-adm.page.html',
  styleUrls: ['./levels-tournaments-fut-adm.page.scss'],
})
export class LevelsTournamentsFutAdmPage implements OnInit {
  swiperModules = [IonicSlides];
swiperSlideChanged($event: CustomEvent<[swiper: import("swiper/types/swiper-class").default]>) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }

}
