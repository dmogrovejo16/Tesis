import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-volley-adm',
  templateUrl: './volley-adm.page.html',
  styleUrls: ['./volley-adm.page.scss'],
})
export class VolleyAdmPage implements OnInit {
  torneos: any[] = [];
  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;
  nombreTorneo: any ;
  isButton11Disabled: boolean=false;
  isButton21Disabled: boolean=false;
  isButton31Disabled: boolean=false;
  state: string = "";
  constructor(private toastController: ToastController,public alertController:AlertController,private http: HttpClient, public _apiService: ApiService) { }

  async mostrarAlerta(id:any) {
    const alert = await this.alertController.create({
      header: '¿Estás seguro de que deseas eliminar el torneo?',
      subHeader: 'Información detallada:',
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

  ngOnInit() {   
    this.isButton11Disabled=!this.isButton1Disabled;
    this.isButton21Disabled=!this.isButton2Disabled;
    this.isButton31Disabled=!this.isButton3Disabled;

    this._apiService.getTournaments().subscribe((res:any)=>{
console.log(res);
this.torneos=res;
  },(error: any)=>{ 
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
console.log(this.nombreTorneo);
  }
  

  onButtonClick() {
  if (this.state="") {
    this.isButton1Disabled = true; 
  } else {
    this.isButton1Disabled = false; 
  }
  }




}

