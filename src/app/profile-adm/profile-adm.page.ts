import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-profile-adm',
  templateUrl: './profile-adm.page.html',
  styleUrls: ['./profile-adm.page.scss'],
})
export class ProfileAdmPage implements OnInit {

  area:any;
  nombre: string = localStorage.getItem("Name")!;
  nombreCapitalizado: string = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
  apellido: string = localStorage.getItem("Last Name")!;
  apellidoCapitalizado: string = this.apellido.charAt(0).toUpperCase()  + this.apellido.slice(0, -1);
  email: string| null = localStorage.getItem("Email");

  nombreCompleto:any;


  constructor(private router: Router, private alertController: AlertController,public _apiService: ApiService, private toastController: ToastController) {}

  ngOnInit() {
    this.area=localStorage.getItem("area");
    this.nombreCompleto=this.nombre+" "+this.apellido
  }

  async presentToastGood(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500, 
      position: 'bottom', 
      color: 'success', 
    });
    toast.present();
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Está seguro que desea eliminar su cuenta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
        console.log(this.email);
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.router.navigate(['/signup']);
            this.presentToastGood('Cuenta eliminada con éxito');
            this._apiService.delete(this.email).subscribe((res:any)=>{
             
            },(error: any)=>{ 
        console.log("ERROR ===", error);
      })
  
           
          }
        }
      ]
    });
  
    await alert.present();
  }
  

}
