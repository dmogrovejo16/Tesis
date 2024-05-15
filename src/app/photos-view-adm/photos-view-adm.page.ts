import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-photos-view-adm',
  templateUrl: './photos-view-adm.page.html',
  styleUrls: ['./photos-view-adm.page.scss'],
})
export class PhotosViewAdmPage implements OnInit {
  imagenes:any;

  constructor(private storageService: StorageService, private toastController: ToastController,) {




   }

   eliminar(nombre:any){
    this.storageService.eliminar(nombre);
    this.presentToastGood('Memoria eliminada correctamente');
   }
  ngOnInit() {
    this.obtenerEnlacesDeImagenes();
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

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

  async obtenerEnlacesDeImagenes() {
    try {
      const path = 'Productos/'; // Especifica la ruta de tu bucket de Firebase
      const urls = await this.storageService.getAllImageUrls(path);
      this.imagenes=urls;
      console.log('Enlaces de las imágenes:', urls);
    } catch (error) {
      console.error('Error al obtener enlaces de imágenes:', error);
    }
  }

  


}
