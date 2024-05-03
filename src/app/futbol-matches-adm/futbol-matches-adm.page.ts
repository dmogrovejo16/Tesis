import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController, IonicSafeString, ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-futbol-matches-adm',
  templateUrl: './futbol-matches-adm.page.html',
  styleUrls: ['./futbol-matches-adm.page.scss'],
})
export class FutbolMatchesAdmPage implements OnInit {

  nombreTorneo:any;
  id: any;
  Eq1: any;
  Eq2: any;
    partidos: any[] = [];
    link:any;
    place:any;
    imagenes:any;
    fechaPartidos:any;
    horaPartidos:any;
    equipo1:any;
    equipo2:any;

  constructor(private storageService:StorageService,private toastController: ToastController, public alertController:AlertController,private el: ElementRef, private http: HttpClient, public _apiService: ApiService) { 
  }
  async mostrarAlertaConImagen(ubi:any, link:any) {
    console.log("Este es el link a mostrar: "+link);

    const alert = await this.alertController.create({
      animated: true,
      backdropDismiss: true,
      cssClass: 'alert-con-imagen',
      header: ubi,
      message: new IonicSafeString(`<img src="${link}" />`),     
       buttons: ['OK']
    });

    await alert.present();
  }

  async obtenerEnlacesDeImagenes(nombre:any) {
    try {
      const path = 'canchas/'; // Especifica la ruta de tu bucket de Firebase
      const urls = await this.storageService.getAllImageUrls(path);
      urls.forEach((cancha: any) => {

if(cancha.name==nombre){
  this.link= cancha.url;
  console.log("Este el supuezto link: "+ this.link);
  this.mostrarAlertaConImagen(this.place,this.link);

}

      });

     this.imagenes=urls;
      console.log('Enlaces de las imágenes:', urls);
    } catch (error) {
      console.error('Error al obtener enlaces de imágenes:', error);
    }
  }

  ubiPartido(ubi:any){
    this.place=ubi;
    if(ubi=="Cancha de Arena" || ubi=="Cancha arena"){
    this.obtenerEnlacesDeImagenes("CanchaArena.jpg");
    
    }
     else if(ubi=="Cancha principal" || ubi=="Cancha principal 1"||ubi=="Cancha principal uno" ||ubi=="Cancha 1" ||ubi=="Cancha uno"){
      this.obtenerEnlacesDeImagenes("CanchaFrontalFutbol.jpg");
    
    
     }
     else if(ubi=="Cancha trasera basquetabll" || ubi=="Cancha trasera basquet"|| ubi=="Cancha trasera baloncesto"||ubi=="Cancha trasera 2" ||ubi=="Cancha 3" ||ubi=="Cancha tres"){
      this.obtenerEnlacesDeImagenes("CanchaFondoBasquet.png");
    
    
     } else if(ubi=="Cancha trasera de futbol" ||ubi=="Cancha trasera futbol" || ubi=="Cancha trasera 1"|| ubi=="Cancha trasera uno"||ubi=="Cancha 2" ||ubi=="Cancha dos" ||ubi=="Cancha futbol dos"){
     this.obtenerEnlacesDeImagenes("CanchaTraseraFutbol.webp");
    
    
     }
     else if(ubi=="Cancha coliseo" || ubi=="Cancha Coliseo"|| ubi=="Cancha del coliseo"|| ubi=="Cancha de el coliseo"||ubi=="Cancha Miguel Merchan" ||ubi=="Cancha Miguel Merchan Ochoa" ||ubi=="Cancha coliseo Miguel Merchan Ochoa"  ||ubi=="Cancha coliseo Miguel Merchan"){
      this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }
     else if(ubi=="Cancha indor" || ubi=="Cancha de indor"|| ubi=="Cancha de futbol indor"||ubi=="Cancha 4" ||ubi=="Cancha cuatro" ||ubi=="Cancha futbol 3"){
      this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }
     else if(ubi=="Cancha 5" || ubi=="Cancha 5"|| ubi=="Cancha de basquet 2"||ubi=="Cancha de basquet dos" ||ubi=="Cancha basquet 2" ||ubi=="Cancha basquet dos" ||ubi=="Cancha baloncesto dos" ||ubi=="Cancha baloncesto 2"){
    this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }
    
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

    this.nombreTorneo = localStorage.getItem("NombreTorneo");
    
    this._apiService.getMatchesFirst().subscribe((res:any)=>{

      console.log(res);
console.log(this.nombreTorneo);
this.partidos = res.filter((partido: any) => partido.nombreTorneo == this.nombreTorneo && partido.disciplina == "Futbol");

console.log(this.partidos);

     
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
