import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { StorageService } from '../storage.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subir-imagen-adm',
  templateUrl: './subir-imagen-adm.page.html',
  styleUrls: ['./subir-imagen-adm.page.scss'],
})
export class SubirImagenAdmPage implements OnInit {
imagenes:any=[];
title: any;
file:any;
  constructor(private router: Router, private storageService:StorageService, private toastController: ToastController) { }

  ngOnInit() {
  }

  subirFoto(event:any){
    const file = event.target.files[0];
this.file=file;
  }

 

  async cargarImagen(){
    const path = 'Productos';
    const name = this.title;
    const res = await this.storageService.uploadImage(this.file, path, name);
 console.log('Este es el link' + res);
 this.presentToastGood("Imagen subida con éxito");
 this.router.navigate(['/photos-view-adm']);
 this.ngOnInit2();
 
 this.imagenes=res;
 localStorage.setItem('imagenes', this.imagenes);
   
   }
 
   async presentToastGood(message: string) {
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
  async ngOnInit2() {
    await LocalNotifications.requestPermissions();//solicitar permisos de la app
    await LocalNotifications.schedule({//Elaboracion del objeto notificacion
      notifications: [
        {
          title: "¡Nueva foto subida al album de recuerdos!",
          body: "Entra a la aplicacion a revivir los recuerdos deportivos de la institucion",
          id: 1
        }
      ]
    });
  }



}
