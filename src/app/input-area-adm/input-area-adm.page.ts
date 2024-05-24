import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input-area-adm',
  templateUrl: './input-area-adm.page.html',
  styleUrls: ['./input-area-adm.page.scss'],
})
export class InputAreaAdmPage implements OnInit {
  area:any;
  id:any;
  constructor(private loadingController: LoadingController, private router: Router,private http: HttpClient, public _apiService: ApiService,private toastController: ToastController) { }

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

  async ingresarArea(){

    const loading = await this.loadingController.create({ 
      message: 'Creando usuario...',
      spinner: 'circles', 
      translucent: true,
      cssClass: 'custom-loading' 
    });
    await loading.present(); 

    let data = {
      id: localStorage.getItem("id"),
      area: this.area
    }
  
    if(this.area!=null){
    this._apiService.areaAdministrator(data).subscribe((res:any)=>{
      this.presentToastGood('Registro exitoso');
      this.router.navigate(['/home-adm']);
      loading.dismiss(); 
      localStorage.setItem("area", this.area);

  
    },(error: any)=>{ 
      loading.dismiss(); 

      console.log("ERROR ===", error);
    })
  }else{
    loading.dismiss(); 
    this.presentToastBad('Porfavor rellene el campo');
  }
  }

}
