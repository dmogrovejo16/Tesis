import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-event-view-est',
  templateUrl: './event-view-est.page.html',
  styleUrls: ['./event-view-est.page.scss'],
})
export class EventViewEstPage implements OnInit {


  name:any;
  fecha:any;
  desc:any;
  lugar:any;
  url:any;
  link:any;
    constructor(private toastController: ToastController) {
      this.url=localStorage.getItem("urlEvento")
      this.name=localStorage.getItem("nameEvento");
      this.fecha=localStorage.getItem("fechaEvento");
      this.lugar=localStorage.getItem("lugarEvento");
      this.desc=localStorage.getItem("descEvento");
      this.link=localStorage.getItem("linkEvento");

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
     async onEyeClick() {
    
      if(this.link){
        await Browser.open({ url: this.link });
      }else{
      this.presentToast("No hay un link para el evento seleccionado");
      }
    }
     handleRefresh(event:any) {
      this.ngOnInit();
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 1500);
    }
  
    ngOnInit() {
      this.url=localStorage.getItem("urlEvento")
      this.name=localStorage.getItem("nameEvento");
      this.fecha=localStorage.getItem("fechaEvento");
      this.lugar=localStorage.getItem("lugarEvento");
      this.desc=localStorage.getItem("descEvento");
    }
  

}
