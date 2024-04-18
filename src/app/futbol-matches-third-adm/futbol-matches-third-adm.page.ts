import { Component, ElementRef,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-futbol-matches-third-adm',
  templateUrl: './futbol-matches-third-adm.page.html',
  styleUrls: ['./futbol-matches-third-adm.page.scss'],
})
export class FutbolMatchesThirdAdmPage implements OnInit {
  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
  nombreTorneo:any;
  partidos: any[] = [];
  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService) {this.isButton1Disabled=this.isButton2Disabled; }

  ngOnInit() {
    this.nombreTorneo=localStorage.getItem("NombreTorneo");

    this._apiService.getMatchesThird().subscribe((res:any)=>{
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
