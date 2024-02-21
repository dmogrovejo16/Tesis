import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.page.html',
  styleUrls: ['./home-adm.page.scss'],
})

export class HomeAdmPage implements OnInit {
  slideOpts: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
  };
  constructor(private apiService:ApiService) { }
  nombre: string = localStorage.getItem("Name")!;

usuarios: any=[]

  ngOnInit() {
    }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);

   
  }
  
  

}

