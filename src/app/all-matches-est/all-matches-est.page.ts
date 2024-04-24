import { Component,ElementRef,  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-all-matches-est',
  templateUrl: './all-matches-est.page.html',
  styleUrls: ['./all-matches-est.page.scss'],
})
export class AllMatchesEstPage implements OnInit {

  

  color:any;
  col:any;
  fechaPartidos:any;
  horaPartidos:any;
  equipo1:any;
  equipo2:any;
  
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
  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService) { }

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

}
