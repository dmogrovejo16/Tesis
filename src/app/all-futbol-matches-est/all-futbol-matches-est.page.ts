import { Component,ElementRef,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController, IonicSafeString, ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-all-futbol-matches-est',
  templateUrl: './all-futbol-matches-est.page.html',
  styleUrls: ['./all-futbol-matches-est.page.scss'],
})
export class AllFutbolMatchesEstPage implements OnInit {
  nombreTorneo:any;
  id: any;
  Eq1: any;
  link:any;
  fecha:any = new Date();
  fechaFormato:any=this.formatDateToYYYYMMDD(this.fecha);
  hora:any = this.fecha.getHours();
  minuto:any = this.fecha.getMinutes();
  horaCom:any=this.hora+":"+this.minuto+":00";
  Eq2: any;
  place:any;
  imagenes:any;
  fechaPartidos:any;
  horaPartidos:any;
  equipo1:any;
  equipo2:any;
  partidos: any[] = [];
  constructor(private el: ElementRef,private storageService:StorageService, private http: HttpClient, public _apiService: ApiService, private toastController: ToastController, public alertController:AlertController) { }

  formatDateToYYYYMMDD(date: Date): string {
    // Obtener año, mes y día de la fecha
    const year = date.getFullYear();
    // El método getMonth() devuelve un número entre 0 y 11, por lo que necesitas agregar 1 para obtener el mes correcto
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    // Formatear la fecha en el formato deseado (año-mes-día)
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
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
  isMenosDeUnaHoraDeDiferencia(hora1: string, hora2: string): boolean {
    // Convertir las horas a objetos Date
    const date1 = new Date(`2000-01-01T${hora1}`);
    const date2 = new Date(`2000-01-01T${hora2}`);
  
    // Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = Math.abs(date1.getTime() - date2.getTime());
  
    // Verificar si la diferencia es menor o igual a una hora en milisegundos (3600000)
    return diferenciaMilisegundos <= 3600000;
  }

  isHoraAntes(hora1: string, hora2: string): boolean {
    // Convertir las horas a objetos Date
    const date1 = new Date(`2000-01-01T${hora1}`);
    const date2 = new Date(`2000-01-01T${hora2}`);
  
    // Comparar las horas
    return date1.getTime() < date2.getTime();
  }

  async ngOnInit2() {
    await LocalNotifications.requestPermissions();//solicitar permisos de la app
    await LocalNotifications.schedule({//Elaboracion del objeto notificacion
      notifications: [
        {
          title: "¡Hay un partido en menos de una hora!",
          body: this.equipo1+" vs "+this.equipo2+" a las "+this.horaPartidos,
          id: 1
        }
      ]
    });
  }

  ngOnInit() {
    this.nombreTorneo = localStorage.getItem("NombreTorneo");
    console.log(this.fechaFormato);
    console.log(this.horaCom);

    this._apiService.getAllMatches().subscribe((res:any)=>{
      this.partidos = res.filter((partido: any) => partido.disciplina == "Futbol");

      this.partidos.forEach((partido:any) => {
        // Obtener la fecha y hora del partido actual
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

    
        },(error: any)=>{ 
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

}
