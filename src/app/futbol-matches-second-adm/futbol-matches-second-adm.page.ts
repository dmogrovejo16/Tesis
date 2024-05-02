import { Component,ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-futbol-matches-second-adm',
  templateUrl: './futbol-matches-second-adm.page.html',
  styleUrls: ['./futbol-matches-second-adm.page.scss'],
})
export class FutbolMatchesSecondAdmPage implements OnInit {
  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
  nombreTorneo:any;
  id: any;
  Eq1: any;
  Eq2: any;
  partidos: any[] = [];
  constructor(private toastController: ToastController, public alertController:AlertController,private el: ElementRef, private http: HttpClient, public _apiService: ApiService) {this.isButton1Disabled=this.isButton2Disabled; }

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


  async mostrarAlerta(id:any) {
    const alert = await this.alertController.create({
      header: '¿Estás seguro de que deseas eliminar el partido?',
      subHeader: 'Información detallada:',
      message: `Estás a punto de eliminar un partido, ¿deseas continuar?`,
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
            this._apiService.deleteMatch(id).subscribe((res:any)=>{
this.presentToastGood("El partido se elimino con éxito");
             },(error: any)=>{ 
                console.log("ERROR ===", error);
                this.presentToastBad("Hubo un problema al eliminar el partido, intentalo mas tarde");
              })

            // Aquí puedes colocar la lógica que desees ejecutar cuando se confirma la acción.
          }
        }
      ]
    });

    await alert.present();
  }   


  ngOnInit() {

    this.nombreTorneo=localStorage.getItem("NombreTorneo");

    this._apiService.getMatchesSecond().subscribe((res:any)=>{

      console.log(res);

      this.partidos = res.filter((partido: any) => partido.nombreTorneo == this.nombreTorneo && partido.disciplina == "Futbol");

    },(error: any)=>{ 
            console.log("ERROR ===", error);
          })


    const elementosConClase: NodeList = this.el.nativeElement.querySelectorAll('.princ');

        elementosConClase.forEach((nodo: Node) => {
          // Verifica si el nodo es un elemento HTMLElement
          if (nodo.nodeType === Node.ELEMENT_NODE) {
            const elemento: HTMLElement = nodo as HTMLElement;
    
            // Obtén el texto dentro del elemento
            const textoDelDiv: string| null = elemento.textContent;
    
           
           
            // Ahora puedes hacer lo que quieras con el texto, por ejemplo, imprimirlo en la consola
            console.log('Texto dentro del div:', textoDelDiv);

            if(textoDelDiv=="Nombre 1"){
              this.isButton1Disabled=false;
              this.isButton2Disabled=true;
                  }

                  if(textoDelDiv!="Nombre 1"){
                    this.isButton1Disabled=false;
                    this.isButton2Disabled=false;
                        }


          }
        });
  }

  enviarID(id: any, Eq1:any, Eq2:any){
    this.id=id;
    this.Eq1=Eq1;
    this.Eq2=Eq2;
    console.log(this.id);
    console.log(this.Eq1);
    console.log(this.Eq2);
    localStorage.setItem("idPartido",this.id);
    localStorage.setItem("Equipo1",this.Eq1);
    localStorage.setItem("Equipo2",this.Eq2);
      }

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

}
