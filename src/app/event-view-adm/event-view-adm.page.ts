import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-event-view-adm',
  templateUrl: './event-view-adm.page.html',
  styleUrls: ['./event-view-adm.page.scss'],
})
export class EventViewAdmPage implements OnInit {
name:any;
fecha:any;
desc:any;
lugar:any;
url:any;
idEvento:any;
link:any;
  constructor(public _apiService: ApiService,private toastController: ToastController,  public alertController:AlertController) {
    this.url=localStorage.getItem("urlEvento")
    this.name=localStorage.getItem("nameEvento");
    this.fecha=localStorage.getItem("fechaEvento");
    this.lugar=localStorage.getItem("lugarEvento");
    this.desc=localStorage.getItem("descEvento");
    this.link=localStorage.getItem("linkEvento");

   }

   async onEyeClick() {
    
    if(this.link){
      await Browser.open({ url: this.link });
    }else{
    this.presentToast("No hay un link para el evento seleccionado");
    }
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom', 
      color: 'warning', 
    });
    toast.present();
  }



  async onLinkClick() {
    this.idEvento=localStorage.getItem("idEvento");
    console.log("id evento: "+this.idEvento);
        const alert = await this.alertController.create({
          header: 'Ingrese el link de la transimisión en vivo',
          inputs: [
            {
              name: 'texto',
              type: 'text',
              placeholder: 'Ingrese su link aquí...'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirmación cancelada');
              }
            }, {
              text: 'Aceptar',
              handler: (data) => {
                if(data.texto){
                console.log('Texto ingresado:', data.texto);
                let data2 = {
                  link: data.texto,
                  id:this.idEvento
                }
                this._apiService.linkEvento(data2).subscribe((res:any)=>{       
    this.presentToastGood("Link ingresado con éxito");
                   
            },(error: any)=>{ 
              console.log("ERROR ===", error);
            })
          }else{
            this.presentToastBad("Tiene que ingresar un link");
          }
          }
            }
          ]
        });
    
        await alert.present();
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

      async presentToastGood(message: string) {
        const toast = await this.toastController.create({
          message: message,
          duration: 2000, 
          position: 'bottom', 
          color: 'success', 
        });
        toast.present();
      }

   handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

  ngOnInit() {
    this.url=localStorage.getItem("urlEvento");
    this.link=localStorage.getItem("linkEvento");
    this.name=localStorage.getItem("nameEvento");
    this.fecha=localStorage.getItem("fechaEvento");
    this.lugar=localStorage.getItem("lugarEvento");
    this.desc=localStorage.getItem("descEvento");
  }

}
