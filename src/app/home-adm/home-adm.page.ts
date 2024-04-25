import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';

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
  constructor(private apiService:ApiService,private storageService:StorageService) { 
    this.obtenerEnlacesDeImagenes();
  }
  nombre: string = localStorage.getItem("Name")!;
imagenes:any;
name:any;
desc:any;
fecha:any;
lugar:any;
usuarios: any=[]
events:any;
event:any;
  ngOnInit() {
    }


  enviarInfo(name:any, url:any){
this.apiService.getEvents().subscribe((res:any)=>{ 
  console.log(res);
  console.log(name);
  this.event=res.find((row:any) => row.nombre == name);
  console.log(this.event);
  this.name=this.event.nombre;
  this.fecha=this.event.fecha;
  this.lugar=this.event.lugar;
  this.desc=this.event.descripcion;
  localStorage.setItem("lugarEvento",this.lugar);
  localStorage.setItem("fechaEvento",this.fecha);
  localStorage.setItem("nameEvento",this.name);
  localStorage.setItem("descEvento",this.desc);
  localStorage.setItem("urlEvento",url);
},(error: any)=>{ 
  console.log("ERROR ===", error);
})
  }

  async obtenerEnlacesDeImagenes() {
    try {
      const path = 'eventos/'; // Especifica la ruta de tu bucket de Firebase
      const urls = await this.storageService.getAllImageUrls(path);
      this.imagenes=urls;
      console.log('Enlaces de las imágenes:', urls);
    } catch (error) {
      console.error('Error al obtener enlaces de imágenes:', error);
    }
  }

  

}

