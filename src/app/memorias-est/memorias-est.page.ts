import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-memorias-est',
  templateUrl: './memorias-est.page.html',
  styleUrls: ['./memorias-est.page.scss'],
})
export class MemoriasEstPage implements OnInit {
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
