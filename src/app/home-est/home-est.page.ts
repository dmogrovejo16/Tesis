import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
@Component({
  selector: 'app-home-est',
  templateUrl: './home-est.page.html',
  styleUrls: ['./home-est.page.scss'],
})
export class HomeEstPage implements OnInit {
  slideOpts: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
  };
  constructor() { }
  nombre: string = localStorage.getItem("Name")!;
  ngOnInit() {
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
}
