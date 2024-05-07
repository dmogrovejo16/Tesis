import { Component,ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController, IonicSafeString, ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-futbol-matches-second-est',
  templateUrl: './futbol-matches-second-est.page.html',
  styleUrls: ['./futbol-matches-second-est.page.scss'],
})
export class FutbolMatchesSecondEstPage implements OnInit {
  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
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
  constructor(private storageService:StorageService,private toastController: ToastController, public alertController:AlertController,private el: ElementRef, private http: HttpClient, public _apiService: ApiService) {this.isButton1Disabled=this.isButton2Disabled; }
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
    if(ubi=="Cancha de Arena"){
    this.obtenerEnlacesDeImagenes("CanchaArena.jpg");
    
    }
     else if(ubi=="Cancha principal (sintética)"){
      this.obtenerEnlacesDeImagenes("CanchaFrontalFutbol.jpg");
    
    
     }
     else if(ubi=="Cancha trasera Basquet 1" || ubi=="Cancha trasera Basquet 2"|| ubi=="Cancha trasera Basquet 13"){
      this.obtenerEnlacesDeImagenes("CanchaFondoBasquet.png");
    
    
     }  else if(ubi=="Cancha trasera Volleyball 1" || ubi=="Cancha trasera Volleyball 2"){
      this.obtenerEnlacesDeImagenes("WhatsApp Image 2024-05-07 at 15.17.17.jpeg");
    
    
     }else if(ubi=="Cancha trasera Futbol"){
     this.obtenerEnlacesDeImagenes("CanchaTraseraFutbol.webp");
    
    
     }
     else if(ubi=="Cancha Volleyball 1" || ubi=="Cancha Volleyball 2"|| ubi=="Cancha Volleyball 3"){
      this.obtenerEnlacesDeImagenes("CanchaFrenteIndor.webp");
    
    
     }
     else if(ubi=="Cancha Coliseo" ){
    this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }else if(ubi=="Cancha Cubierta" ){
      this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
      
      
       }else if(ubi=="Cancha Basquetball" ){
        this.obtenerEnlacesDeImagenes("CanchaBasquet.jpg");
        
        
         }
    
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

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

}
