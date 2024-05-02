import { Component,ElementRef,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AlertController, IonicSafeString, ToastController } from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-all-basquet-matches-est',
  templateUrl: './all-basquet-matches-est.page.html',
  styleUrls: ['./all-basquet-matches-est.page.scss'],
})
export class AllBasquetMatchesEstPage implements OnInit {

equipo1:any;
equipo2:any;
horaPartidos:any;
  nombreTorneo:any;
  fechaPartidos:any;
  link:any;
  place:any;
  imagenes:any;
  id: any;
  Eq1: any;
  Eq2: any;
  fecha:any = new Date();
  fechaFormato:any=this.formatDateToYYYYMMDD(this.fecha);
  hora:any = this.fecha.getHours();
  minuto:any = this.fecha.getMinutes();
  horaCom:any=this.hora+":"+this.minuto+":00";

  partidos: any[] = [];
  constructor(private storageService:StorageService, private toastController: ToastController,private el: ElementRef, public alertController:AlertController,private http: HttpClient, public _apiService: ApiService) { }

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


  ngOnInit() {

    this.nombreTorneo = localStorage.getItem("NombreTorneo");
    console.log(this.fechaFormato);
    console.log(this.horaCom);

    this._apiService.getAllMatches().subscribe((res:any)=>{
      this.partidos = res.filter((partido: any) => partido.disciplina == "Basquetball");

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
     else if(ubi=="Cancha coliseo"|| ubi=="Cancha Coliseo" || ubi=="Cancha del coliseo"|| ubi=="Cancha de el coliseo"||ubi=="Cancha Miguel Merchan" ||ubi=="Cancha Miguel Merchan Ochoa" ||ubi=="Cancha coliseo Miguel Merchan Ochoa"  ||ubi=="Cancha coliseo Miguel Merchan"){
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
