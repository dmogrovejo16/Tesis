import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-create-volley-torunament-adm',
  templateUrl: './create-volley-torunament-adm.page.html',
  styleUrls: ['./create-volley-torunament-adm.page.scss'],
})
export class CreateVolleyTorunamentAdmPage implements OnInit {

  name: string = '';
  fechIni: string = '';
  fechFin: string = '';
  idAdmCreator: string = '40';
  id: string = localStorage.getItem("id")!;

  constructor(private loadingController: LoadingController,private router: Router,public _apiService: ApiService,private toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  async addTournament(){
    const loading = await this.loadingController.create({ // Creamos el loading
      message: 'Creando torneo...',
      spinner: 'circles', // Puedes cambiar el tipo de spinner según tus preferencias
      translucent: true,
      cssClass: 'custom-loading' // Clase CSS personalizada para el loading
    });
    await loading.present(); 
if(this.name!=''||this.fechIni!=''||this.fechFin!=''){



    var fechaInicio = new Date(this.fechIni);
    var fechaFin = new Date(this.fechFin);
    console.log(fechaInicio,' ' ,fechaFin);


if(fechaInicio < fechaFin){

    let data = {
      name: this.name,
      fechIni: this.fechIni,
      fechFin: this.fechFin,
      idAdmCreator: this.id,
    }

    this._apiService.addTournament(data).subscribe((res:any)=>{

      this.route.params.subscribe((param:any) =>{
        this.name = param.name;
        console.log(this.name);
        
            }) 
            
        console.log("SUCCESS ===", res);
      this.name='';
      this.fechIni='';
      this.fechFin='';
      this.idAdmCreator='';
      this.router.navigate(['/volley-adm']);
      loading.dismiss(); 
      this.presentToast('Torneo creado exitosamente');
      this.ngOnInit2();
  },(error: any)=>{ 
    console.log("ERROR ===", error);
  })
  
}else{
  loading.dismiss(); 
  this.presentToastBad('La fecha de inicio debe ser anterior a la fecha de finalización');

}

}else{
  loading.dismiss(); 
  this.presentToastBad('Porfavor complete todos los campos');

}
}

async presentToast(message: string) {
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
async ngOnInit2() {
  await LocalNotifications.requestPermissions();//solicitar permisos de la app
  await LocalNotifications.schedule({//Elaboracion del objeto notificacion
    notifications: [
      {
        title: "¡Un nuevo torneo ha empezado!",
        body: "Entra a la aplicacion para no perderte ninguno de los partidos",
        id: 1
      }
    ]
  });
}

}
