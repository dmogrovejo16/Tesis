import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-futbol-adm',
  templateUrl: './futbol-adm.page.html',
  styleUrls: ['./futbol-adm.page.scss'],
})
export class FutbolAdmPage implements OnInit {
  torneos: any[] = [];
  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;
  nombreTorneo: any ;
  nameTorneo:any;
  id:any;
  fechaTorneo:any;
  fecha:any = new Date();
  fechaFormato:any=this.formatDateToYYYYMMDD(this.fecha);
  isButton11Disabled: boolean=false;
  isButton21Disabled: boolean=false;
  isButton31Disabled: boolean=false;
  state: string = "";
  constructor(private http: HttpClient,public alertController:AlertController, public _apiService: ApiService,private toastController: ToastController) { }

  formatDateToYYYYMMDD(date: Date): string {
    // Obtener año, mes y día de la fecha
    const year = date.getFullYear();
    // El método getMonth() devuelve un número entre 0 y 11, por lo que necesitas agregar 1 para obtener el mes correcto
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    // Formatear la fecha en el formato deseado (año-mes-día)
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

  faltaUnDia(fecha1: string, fecha2: string): boolean {
    // Convertimos las cadenas de fecha a objetos Date
    const date1 = new Date(fecha1);
    const date2 = new Date(fecha2);

    // Comprobamos si la segunda fecha es posterior a la primera
    if (date2.getTime() > date1.getTime()) {
        // Obtenemos la diferencia en milisegundos
        const diff = date2.getTime() - date1.getTime();
        // Convertimos la diferencia a días
        const diffDays = diff / (1000 * 60 * 60 * 24);
        // Si la diferencia es exactamente 1 día, retorna true
        return diffDays === 1;
    } else {
        // Si la segunda fecha no es posterior a la primera, retorna false
        return false;
    }
}

async ngOnInit2() {
  await LocalNotifications.requestPermissions();//solicitar permisos de la app
  await LocalNotifications.schedule({//Elaboracion del objeto notificacion
    notifications: [
      {
        title: "¡El torneo "+this.nameTorneo+" empieza mañana!",
        body: "No te pierdas este increible evento, consulta los partidos de tu curso",
        id: 1
      }
    ]
  });
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

async mostrarAlerta(id:any) {
  const alert = await this.alertController.create({
    header: '¿Estás seguro de que deseas eliminar el torneo?',
    message: `Estás a punto de eliminar un torneo, ¿deseas continuar?`,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          console.log('Confirmar');
          this._apiService.deleteTournament(id).subscribe((res:any)=>{
this.presentToast("El torneo se elimino con éxito");
           },(error: any)=>{ 
              console.log("ERROR ===", error);
              this.presentToastBad("Hubo un problema al eliminar el torneo, intentalo mas tarde");
            })

          // Aquí puedes colocar la lógica que desees ejecutar cuando se confirma la acción.
        }
      }
    ]
  });

  await alert.present();
}   


  ngOnInit() {   
    this.isButton11Disabled=!this.isButton1Disabled;
    this.isButton21Disabled=!this.isButton2Disabled;
    this.isButton31Disabled=!this.isButton3Disabled;

    this._apiService.getTournaments().subscribe((res:any)=>{
console.log(res);
this.torneos=res;

res.forEach((torneo:any) => {
  // Obtener la fecha y hora del partido actual
  const fechaTorneo = torneo.fechaInicio;
  const fechaInicial = this.fechaFormato;
console.log(fechaTorneo);
console.log(this.fechaFormato);

if (this.faltaUnDia(fechaInicial, fechaTorneo)) {
  console.log('Falta un día entre las fechas.');
  this.nameTorneo=torneo.nombreTorneo;
this.ngOnInit2();
} else {
  console.log('No falta un día entre las fechas o la segunda fecha es anterior a la primera.');
}

});



  },(error: any)=>{ 
      alert('ERROR');
      console.log("ERROR ===", error);
    })
  
  }

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

obtenerNombre(nombreT:any){
  this.nombreTorneo=nombreT;
  localStorage.setItem("NombreTorneo", this.nombreTorneo);


}

public alertButtons = [
  {
    text: 'Cancel',
    role: 'cancel',
    handler: () => {
      console.log('Alert canceled');
    },
  },
  {
    text: 'OK',
    role: 'confirm',
    handler: () => {
      console.log('Alert confirmed');
    },
  },
];

setResult(ev:any) {
  console.log(`Dismissed with role: ${ev.detail.role}`);
}

  onButtonClick() {
  if (this.state="") {
    this.isButton1Disabled = true; 
  } else {
    this.isButton1Disabled = false; 
  }
  }

 




}
