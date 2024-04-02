import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subir-imagen-adm',
  templateUrl: './subir-imagen-adm.page.html',
  styleUrls: ['./subir-imagen-adm.page.scss'],
})
export class SubirImagenAdmPage implements OnInit {
imagenes:any=[];
  constructor(private router: Router, private storageService:StorageService, private toastController: ToastController) { }
  title: any;
  ngOnInit() {
  }

  async cargarImagen(event:any){
   const path = 'Productos';
   const name = this.title;
   const file = event.target.files[0];
   const res = await this.storageService.uploadImage(file, path, name);
console.log('Este es el link' + res);
this.presentToastGood("Imagen subida con éxito");
this.router.navigate(['/memorias-adm']);

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



}
