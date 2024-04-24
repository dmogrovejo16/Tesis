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
    return this.http.post('http://192.168.1.7/create.php/', data);
      }

      addMatch(data: { fecha: any; hora: any; equipo1: any; equipo2: any;etapa:any; nivel:any; nombreTorneo:any; disciplina:any; email:any}){
        return this.http.post('http://192.168.1.7/createMatch.php/', data);
          }

          resultMatch(data: { resEq1: any; resEq2: any; id:any;}){
            return this.http.post('http://192.168.1.7/updateStudent.php/', data);
              }

              classStudent(data: { curso: any;  id:any;}){
                return this.http.post('http://192.168.1.7/classStudent.php/', data);
                  }

                  areaAdministrator(data: { area: any;  id:any;}){
                    return this.http.post('http://192.168.1.7/areaAdministrator.php/', data);
                      }

      getStudents(){
        return this.http.get('http://192.168.1.7/getStudents.php/');
      }

      getAllMatches(){
        return this.http.get('http://192.168.1.7/getAllMatches.php/');
        

      }


      getMatchesFirst(){
        return this.http.get('http://192.168.1.7/getMatches_first.php/');

      }

      getMatchesSecond(){
        return this.http.get('http://192.168.1.7/getMatches_second.php/');

      }

      getMatchesThird(){
        return this.http.get('http://192.168.1.7/getMatches_third.php/');

      }

      getSingleStudent(data: { email:any; }){
        return this.http.get('http://192.168.1.7/getSingleStudent.php/');

      }

      delete(email: string | null){
        return this.http.delete('http://192.168.1.7/delete.php?email='+email);
      }

      deleteTournament(id: any){
        return this.http.delete('http://192.168.1.7/deleteTournament.php?id='+id);
      }

      deleteMatch(id: any){
        return this.http.delete('http://192.168.1.7/deleteMatch.php?id='+id);
      }
      

      addTournament(data: { name: string; fechIni: string; fechFin: string; idAdmCreator: string;  }){
        return this.http.post('http://192.168.1.7/createTorunament.php/', data);
      }

      addImagen(formData: FormData){
        return this.http.post('http://192.168.1.7/createImagen.php/', formData);
      }

      getTournaments(){
        return this.http.get('http://192.168.1.7/getTournaments.php/');
      }

      getImagenes(){
        return this.http.get('http://192.168.1.7/getImagenes.php/');
      }

      getAlumno(){
        return this.http.get('http://192.168.1.7/getAlumno.php/');

      }

}
