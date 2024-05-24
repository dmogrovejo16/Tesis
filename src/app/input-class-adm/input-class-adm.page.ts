import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input-class-adm',
  templateUrl: './input-class-adm.page.html',
  styleUrls: ['./input-class-adm.page.scss'],
})
export class InputClassAdmPage implements OnInit {
curso:any;
id:any;
  constructor(private loadingController: LoadingController,private router: Router,private http: HttpClient, public _apiService: ApiService,private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToastBad(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000, 
      position: 'bottom', 
      color: 'danger', 
    });
    toast.present();
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

  async ingresarCurso(){

  const loading = await this.loadingController.create({ // Creamos el loading
    message: 'Creando usuario...',
    spinner: 'circles', // Puedes cambiar el tipo de spinner según tus preferencias
    translucent: true,
    cssClass: 'custom-loading' // Clase CSS personalizada para el loading
  });
  await loading.present(); 

  let data = {
    id: localStorage.getItem("id"),
    curso: this.curso
  }

  if(this.curso!=null){
  this._apiService.classStudent(data).subscribe((res:any)=>{
    this.presentToastGood('Registro exitoso');
    this.router.navigate(['/home-est']);
    loading.dismiss(); 
localStorage.setItem("curso", this.curso);

  },(error: any)=>{ 
    loading.dismiss(); 
    this.presentToastBad('Porfavor siga el formato solicitado');
    console.log("ERROR ===", error);
  })
}else if (this.curso!=null && this.curso.length>3){
  loading.dismiss(); 
  this.presentToastBad('Porfavor siga el formato solicitado');

}else{
  loading.dismiss(); 
  this.presentToastBad('Porfavor rellene el campo');
}
}



}
