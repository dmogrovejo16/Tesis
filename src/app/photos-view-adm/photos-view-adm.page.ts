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

  constructor(private storageService: StorageService) {

    this.obtenerEnlacesDeImagenes();


   }

  ngOnInit() {
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
