import { Component,ElementRef,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { LocalNotifications } from '@capacitor/local-notifications';
import { NotificationsService } from '../notifications.service';
import { StorageService } from '../storage.service';
import { AlertController, IonicSafeString } from '@ionic/angular';
@Component({
  selector: 'app-all-matches-est',
  templateUrl: './all-matches-est.page.html',
  styleUrls: ['./all-matches-est.page.scss'],
})
export class AllMatchesEstPage implements OnInit {

  

  color:any;
  col:any;
  place:any
  fechaPartidos:any;
  horaPartidos:any;
  equipo1:any;
  equipo2:any;
  link:any;
  imagenes:any;
    nombreTorneo:any;
    id: any;
    Eq1: any;
    Eq2: any;
    partidos: any[] = [];
    fecha:any = new Date();
    fechaFormato:any=this.formatDateToYYYYMMDD(this.fecha);
    hora:any = this.fecha.getHours();
    minuto:any = this.fecha.getMinutes();
    
    horaCom:any=this.hora+":"+this.minuto+":00";
  constructor(private storageService:StorageService, public alertController:AlertController,private el: ElementRef, private http: HttpClient, public _apiService: ApiService) { }

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

  formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

  ngOnInit() {
    this.nombreTorneo = localStorage.getItem("NombreTorneo");
    
    this._apiService.getAllMatches().subscribe((res:any)=>{
      res.forEach((partido:any) => {
        const fechaPartido = partido.fechaPartido;
        this.fechaPartidos=fechaPartido;
        const horaPartido = partido.horaPartido;
        this.horaPartidos = horaPartido;
        this.equipo1=partido.equipo1;
        this.equipo2=partido.equipo2;
      
        if (this.isMenosDeUnaHoraDeDiferencia(horaPartido, this.horaCom) && this.horaCom<horaPartido&&this.fechaFormato==fechaPartido) {
          console.log(`Entre ${horaPartido} y ${this.horaCom}, aun no pasa y falta menos de una hora`);
          this.ngOnInit2();
        } else {
        }

      });
      console.log(res);
      this.partidos = res;

    
        },(error: any)=>{ 
            console.log("ERROR ===", error);
          })


        }
        isMenosDeUnaHoraDeDiferencia(hora1: string, hora2: string): boolean {
          const date1 = new Date(`2000-01-01T${hora1}`);
          const date2 = new Date(`2000-01-01T${hora2}`);
        
          const diferenciaMilisegundos = Math.abs(date1.getTime() - date2.getTime());
        
          return diferenciaMilisegundos <= 3600000;
        }
      
        isHoraAntes(hora1: string, hora2: string): boolean {
          const date1 = new Date(`2000-01-01T${hora1}`);
          const date2 = new Date(`2000-01-01T${hora2}`);
        
          return date1.getTime() < date2.getTime();
        } 
  
        async ngOnInit2() {
          await LocalNotifications.requestPermissions();
          await LocalNotifications.schedule({
            notifications: [
              {
                title: "¡Hay un partido en menos de una hora!",
                body: this.equipo1+" vs "+this.equipo2+" a las "+this.horaPartidos,
                id: 1
              }
            ]
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
     else if(ubi=="Cancha coliseo" || ubi=="Cancha del coliseo"|| ubi=="Cancha de el coliseo"||ubi=="Cancha Miguel Merchan" ||ubi=="Cancha Miguel Merchan Ochoa" ||ubi=="Cancha coliseo Miguel Merchan Ochoa"  ||ubi=="Cancha coliseo Miguel Merchan"){
      this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }
     else if(ubi=="Cancha indor" || ubi=="Cancha de indor"|| ubi=="Cancha de futbol indor"||ubi=="Cancha 4" ||ubi=="Cancha cuatro" ||ubi=="Cancha futbol 3"){
      this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }
     else if(ubi=="Cancha 5" || ubi=="Cancha 5"|| ubi=="Cancha de basquet 2"||ubi=="Cancha de basquet dos" ||ubi=="Cancha basquet 2" ||ubi=="Cancha basquet dos" ||ubi=="Cancha baloncesto dos" ||ubi=="Cancha baloncesto 2"){
    this.obtenerEnlacesDeImagenes("CanchaColiseo.jpg");
    
    
     }
    
    }
}
