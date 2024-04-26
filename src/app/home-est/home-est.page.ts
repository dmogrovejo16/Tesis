import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { StorageService } from '../storage.service';
import { ApiService } from '../api.service';
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
  constructor(private apiService:ApiService,private storageService:StorageService) { 
    this.obtenerEnlacesDeImagenes();
    if(this.imagenes!=null){
      this.modo=true;
    }else{
      this.modo=false;
    }
  }
  nombre: string = localStorage.getItem("Name")!;
imagenes:any;
name:any;
modo:boolean=false;
desc:any;
fecha:any;
lugar:any;
usuarios: any=[]
events:any;
event:any;
  ngOnInit() {

    this.obtenerEnlacesDeImagenes();
    console.log(this.imagenes);
      if(this.imagenes!=null){
        this.modo=true;
      }else{
        this.modo=false;
      }

    }


    handleRefresh(event:any) {
      this.ngOnInit();
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 1500);
    } 

  enviarInfo(name:any, url:any){
this.apiService.getEvents().subscribe((res:any)=>{ 
  if(res){
    this.modo=true;
  }else{
    this.modo=false;
  }
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
