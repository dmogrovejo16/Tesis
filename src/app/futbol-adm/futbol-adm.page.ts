import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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
  isButton11Disabled: boolean=false;
  isButton21Disabled: boolean=false;
  isButton31Disabled: boolean=false;
  state: string = "";
  constructor(private http: HttpClient, public _apiService: ApiService) { }

  ngOnInit() {   
    this.isButton11Disabled=!this.isButton1Disabled;
    this.isButton21Disabled=!this.isButton2Disabled;
    this.isButton31Disabled=!this.isButton3Disabled;

    this._apiService.getTournaments().subscribe((res:any)=>{
console.log(res);
this.torneos=res;
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

  eliminarTorneo($event:MouseEvent){
    if (event) {
      event.stopPropagation(); // Detiene la propagación del evento clic si event no es undefined
      console.log("eliminado");
    }
    
  }




}
