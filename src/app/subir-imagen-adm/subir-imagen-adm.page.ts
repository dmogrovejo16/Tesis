import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-subir-imagen-adm',
  templateUrl: './subir-imagen-adm.page.html',
  styleUrls: ['./subir-imagen-adm.page.scss'],
})
export class SubirImagenAdmPage implements OnInit {
imagenes:any=[];
  constructor(private storageService:StorageService) { }

  ngOnInit() {
  }

  cargarImagen(event:any){
    let nombre = "Mathias"
console.log(event.target.files);
let archivos = event.target.files;
let reader = new FileReader();
reader.readAsDataURL(archivos[0]);
reader.onloadend=()=>{
this.imagenes.push(reader.result);
this.storageService.subirImagen(nombre+" "+Date.now(), reader.result);
}
  }



}
