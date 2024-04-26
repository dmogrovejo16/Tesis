import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonicSlides, ToastController } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';
import {deleteObject, ref} from "firebase/storage"
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';


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
  constructor(private storage: AngularFireStorage,public alertController:AlertController,private apiService:ApiService,private storageService:StorageService,private toastController: ToastController) { 
    this.obtenerEnlacesDeImagenes();
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
    this.apiService.getEvents().subscribe((res:any)=>{ 
      if(res){
        this.modo=true;
      }else{
        this.modo=false;
      }
    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })
   
    }

    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000, 
        position: 'bottom', 
        color: 'success', 
      });
      toast.present();
    }
    
    async presentToastBad(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000, 
        position: 'bottom', 
        color: 'danger', 
      });
      toast.present();
    }

    async mostrarAlerta(name:any) {
      const alert = await this.alertController.create({
        header: '¿Estás seguro de que deseas eliminar el evento?',
        subHeader: 'Información detallada:',
        message: `Estás a punto de eliminar un evento, ¿deseas continuar?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Cancelar');
            }
          },
          {
            text: 'Confirmar',
            handler: () => {
              console.log('Confirmar');
              const archivoRef = this.storage.ref('eventos/' + name);
              // Elimina el archivo
              archivoRef.delete().subscribe(() => {
                // El archivo ha sido eliminado exitosamente
                console.log('Archivo eliminado correctamente');
              }, (error) => {
                // Ocurrió un error al intentar eliminar el archivo
                console.error('Error al eliminar el archivo:', error);
              });
    
            }
          }
        ]
      });
    
      await alert.present();
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

