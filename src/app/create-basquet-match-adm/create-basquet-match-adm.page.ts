import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { LocalNotifications } from '@capacitor/local-notifications';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-basquet-match-adm',
  templateUrl: './create-basquet-match-adm.page.html',
  styleUrls: ['./create-basquet-match-adm.page.scss'],
})
export class CreateBasquetMatchAdmPage implements OnInit {
  
  fecha:string="";
  hora: string="";
  equipo1:string="";
  equipo2:string="";
  etapa:string="";
  ubi:string="";
  nivel:string="";
  disciplina:string="" ;
  email: string | null | undefined;
  nombreTorneo: string | null | undefined;

  colors: string[] = ["1E1", "1E2", "1A1", "1A2", "1B1","1C1","1C2", "1D1", "1D2","1F1","1F2","1F3",
  "2E1", "2E2", "2A1", "2A2", "2B1","2C1","2C2", "2D1", "2D2","2F1","2F2","2F3",
  "3E1", "3E2", "3A1", "3A2", "3B1","3C1","3C2", "3D1", "3D2","3F1","3F2","3F3"];

  selectedColor: string = "";
  selectedTeam: string="";
  searchTerm: string = "";
  
  filteredColors: string[] = this.colors;
  constructor(private navCtrl: NavController,private router: Router,public _apiService: ApiService,private http: HttpClient,private toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
  filterColors() {
    this.filteredColors = this.colors.filter((color) => color.toLowerCase().includes(this.searchTerm.toLowerCase()));
   
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


  crearPartido(){

    if(this.fecha!=''&&this.hora!=''&&this.equipo1!=''&&this.equipo2!=''&&this.etapa!=''&&this.disciplina!=''){


if(this.equipo1!=this.equipo2){
    

  if (this.equipo1.charAt(0).toLowerCase() === this.equipo2.charAt(0).toLowerCase()) {
    

if(this.equipo1.charAt(0).toLowerCase() == '1'){
 this.nivel='Primero';
}else if(this.equipo1.charAt(0).toLowerCase() == '2'){
 this.nivel='Segundo';
}else{
  this.nivel='Tercero';
}

    this.email= localStorage.getItem('Email');
this.nombreTorneo=localStorage.getItem('NombreTorneo');
    let data = {
      fecha: this.fecha,
      hora: this.hora,
      equipo1: this.equipo1,
      equipo2: this.equipo2,
      etapa: this.etapa,
      nivel: this.nivel,
      nombreTorneo: this.nombreTorneo,
      disciplina: this.disciplina,
      email: this.email,
      ubi:this.ubi
    }

    this._apiService.addMatch(data).subscribe((res:any)=>{

      console.log("SUCCESS ===", res);
      this.goBack();
      this.presentToastGood('Partido creado con éxito');

    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

    this.ngOnInit2();
  } else {
    this.presentToastBad('Los equipos a enfrentarse deben ser del mismo nivel');
  }

  }else{

    this.presentToastBad('Los equipos a enfrentarse deben ser diferentes');
  
  }
}else{
  this.presentToastBad('Porfavor complete todos los campos');

}

}

async ngOnInit2() {
  await LocalNotifications.requestPermissions();//solicitar permisos de la app
  await LocalNotifications.schedule({//Elaboracion del objeto notificacion
    notifications: [
      {
        title: "¡Nuevo partido agregado!",
        body: this.equipo1 + " vs "+this.equipo2 + " el " +this.fecha +" a las " + this.hora,
        id: 1
      }
    ]
  });
}

}
