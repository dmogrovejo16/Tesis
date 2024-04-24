import { Component,ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-all-volley-matches-est',
  templateUrl: './all-volley-matches-est.page.html',
  styleUrls: ['./all-volley-matches-est.page.scss'],
})
export class AllVolleyMatchesEstPage implements OnInit {
  nombreTorneo:any;
  id: any;
  Eq1: any;
  Eq2: any;
  partidos: any[] = [];
  constructor( private el: ElementRef, private http: HttpClient, public _apiService: ApiService) { }

  ngOnInit() {
    this.nombreTorneo = localStorage.getItem("NombreTorneo");
    
    this._apiService.getAllMatches().subscribe((res:any)=>{

      console.log(res);
      this.partidos = res.filter((partido: any) => partido.disciplina == "Volleyball");

    
        },(error: any)=>{ 
            console.log("ERROR ===", error);
          })

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
