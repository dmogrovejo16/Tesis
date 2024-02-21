import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-basquet-matches-adm',
  templateUrl: './basquet-matches-adm.page.html',
  styleUrls: ['./basquet-matches-adm.page.scss'],
})
export class BasquetMatchesAdmPage implements OnInit {

  nombreTorneo:any;
  id: any;
  Eq1: any;
  Eq2: any;
    partidos: any[] = [];
  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService) {
   }

    
  ngOnInit() {

    this.nombreTorneo=localStorage.getItem("NombreTorneo")?.toUpperCase();

    this._apiService.getMatchesFirst().subscribe((res:any)=>{
      console.log(res);
      this.partidos = res.filter((partido: any) => partido.nombreTorneo == this.nombreTorneo && partido.disciplina == "Basquetball");


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

