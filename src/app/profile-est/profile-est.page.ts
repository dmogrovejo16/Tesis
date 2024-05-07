import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-est',
  templateUrl: './profile-est.page.html',
  styleUrls: ['./profile-est.page.scss'],
})
export class ProfileEstPage implements OnInit {
  curso:any;
est:any;
idAdministrador:any;
  esp: string = " ";
  nombreCapitalizado: any = localStorage.getItem("Name");
  email: string| null = localStorage.getItem("Email");
  nombreCompleto:any;
  apellido: string = localStorage.getItem("Last Name")!;
  apellidoCapitalizado: string = this.apellido.charAt(0).toUpperCase()  + this.apellido.slice(0, -1);
  constructor(private router: Router, private alertController: AlertController,public _apiService: ApiService, private toastController: ToastController) { }

 



  ngOnInit() {
    this.nombreCompleto=this.nombreCapitalizado+" "+this.apellido
    this.est = this._apiService.getAlumnos().subscribe((res:any)=>{
      res.forEach((est:any) => {
      if(est.idAdm==this.idAdministrador ){
        this.curso=est.curso;
      }
      });
    },(error: any)=>{ 
      alert('ERROR');
      console.log("ERROR ===", error);
    })

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
