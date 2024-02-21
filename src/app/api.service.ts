import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders = new HttpHeaders;

  constructor(public http: HttpClient) { 
    this.headers.append("Accept", 'application/json');
this.headers.append('Content-Type', 'application/json');
this.headers.append('Access-Control-Allow-Origin', '*');

  }


  
  addStudent(data: { email: any; name: any; lastName: any; password: any; }){
    return this.http.post('http://localhost/create.php/', data);
      }

      addMatch(data: { fecha: any; hora: any; equipo1: any; equipo2: any;etapa:any; nivel:any; nombreTorneo:any; disciplina:any; email:any}){
        return this.http.post('http://localhost/createMatch.php/', data);
          }

          resultMatch(data: { resEq1: any; resEq2: any; id:any;}){
            return this.http.post('http://localhost/updateStudent.php/', data);
              }

              classStudent(data: { curso: any;  id:any;}){
                return this.http.post('http://localhost/classStudent.php/', data);
                  }

                  areaAdministrator(data: { area: any;  id:any;}){
                    return this.http.post('http://localhost/areaAdministrator.php/', data);
                      }

      getStudents(){
        return this.http.get('http://localhost/getStudents.php/');

      }

      getMatchesFirst(){
        return this.http.get('http://localhost/getMatches_first.php/');

      }

      getMatchesSecond(){
        return this.http.get('http://localhost/getMatches_second.php/');

      }

      getMatchesThird(){
        return this.http.get('http://localhost/getMatches_third.php/');

      }

      getSingleStudent(data: { email:any; }){
        return this.http.get('http://localhost/getSingleStudent.php/');

      }

      delete(email: string | null){
        return this.http.delete('http://localhost/delete.php?email='+email);
      }

      deleteTournament(id: any){
        return this.http.delete('http://localhost/deleteTournament.php?id='+id);
      }

      addTournament(data: { name: string; fechIni: string; fechFin: string; idAdmCreator: string;  }){
        return this.http.post('http://localhost/createTorunament.php/', data);
      }

      getTournaments(){
        return this.http.get('http://localhost/getTournaments.php/');
      }

}
