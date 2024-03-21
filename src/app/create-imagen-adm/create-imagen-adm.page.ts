import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-imagen-adm',
  templateUrl: './create-imagen-adm.page.html',
  styleUrls: ['./create-imagen-adm.page.scss'],
})
export class CreateImagenAdmPage implements OnInit {
title: any;
desc: any;
url:any;
  constructor(private router: Router,public _apiService: ApiService,private toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.url=event.target.files[0];
            console.log('Imagen seleccionada:', this.url);
      
    }
  }

addImagen(){



  if(this.title!=''&&this.url!=null){

    const formData = new FormData();
    formData.append('url', this.url);
    formData.append('title', this.url);
    formData.append('desc', this.url);
    
    this._apiService.addImagen(formData).subscribe((res:any)=>{
this.presentToast("Imagen guardada con éxito");
    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

}else{
  this.presentToastBad("Rellene todos los campos")
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
}
