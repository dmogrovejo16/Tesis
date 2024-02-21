import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-futbol-torunament-adm',
  templateUrl: './create-futbol-torunament-adm.page.html',
  styleUrls: ['./create-futbol-torunament-adm.page.scss'],
})
export class CreateFutbolTorunamentAdmPage implements OnInit {

  name: string = '';
  fechIni: string = '';
  fechFin: string = '';
  idAdmCreator: string = '40';
  id: string = localStorage.getItem("id")!;

  constructor(private router: Router,public _apiService: ApiService,private toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  addTournament(){

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
      this.router.navigate(['/futbol-adm']);
      this.presentToast('Torneo creado exitosamente');
  },(error: any)=>{ 
    console.log("ERROR ===", error);
  })
  
}else{
  this.presentToastBad('La fecha de inicio debe ser anterior a la fecha de finalización');

}

}else{
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

}
