import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-photos-view-est',
  templateUrl: './photos-view-est.page.html',
  styleUrls: ['./photos-view-est.page.scss'],
})
export class PhotosViewEstPage implements OnInit {
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
