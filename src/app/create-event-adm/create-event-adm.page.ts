import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-event-adm',
  templateUrl: './create-event-adm.page.html',
  styleUrls: ['./create-event-adm.page.scss'],
})
export class CreateEventAdmPage implements OnInit {
name:any;
fecha:any;
desc:any;
lugar:any;
url:any;
file:any;
imagenes:any;

  constructor(private router: Router, public _apiService: ApiService,private storageService:StorageService, private toastController: ToastController) { }

  ngOnInit() {
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


  subirFoto(event:any){
    const file = event.target.files[0];
this.file=file;
  }

  async ngOnInit2() {
    await LocalNotifications.requestPermissions();//solicitar permisos de la app
    await LocalNotifications.schedule({//Elaboracion del objeto notificacion
      notifications: [
        {
          title: "¡Nueva foto subida al album de recuerdos!",
          body: "Entra a la aplicacion a revivir los recuerdos deportivos de la institucion",
          id: 1
        }
      ]
    });
  }

  async cargarEvento(){

    let data = {
      name: this.name,
      desc: this.desc,
      fecha: this.fecha,
      lugar: this.lugar,
    }
    
     this._apiService.createEvent(data).subscribe((res:any)=>{
    this.presentToastGood("Evento creado con éxito");
    },(error: any)=>{ 
      this.presentToastBad("No se pudo crear el evento, intentelo mas tarde");
      console.log("ERROR ===", error);
    })

    const path = 'eventos';
    const name = this.name;
    const res = await this.storageService.uploadImage(this.file, path, name);
 console.log('Este es el link' + res);
 this.router.navigate(['/home-adm']);
 this.ngOnInit2();
 
 this.imagenes=res;
 localStorage.setItem('imagenes', this.imagenes);
 


   }
 

}
