import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inputValue: string = '';
  constructor(private router: Router,private http: HttpClient, public _apiService: ApiService,private toastController: ToastController)
   {

    }


  name: string = '';
  password: string = '';
  lastName: string = '';
  email: string = '';
  hashedPassword: string= '';

  hashPassword(password: string): string {
    return CryptoJS.SHA512(password).toString();
  }

  ngOnInit() {
    
  }

  
  
  iniciarSesion(){
  this.hashedPassword = this.hashPassword(this.password);


   
    this._apiService.getStudents().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      console.log(this.email);
      
      if(res.some((item: { email: any; }) => item.email === this.email)&&res.some((item: { contrasena: any; }) => item.contrasena === this.hashedPassword)&&this.email.includes('.est')){
        this.router.navigate(['/home-est']);
        this.presentToastGood('Resgistro exitoso');
    
        const estudianteEncontrado = res.find((estudiante: any) => estudiante.email === this.email);
        if (estudianteEncontrado) {
          const idEstudiante = estudianteEncontrado.id;
        } 

   

        const nombre= res.find((estudiante: any) => estudiante.email === this.email).nombre;
        const apellido= res.find((estudiante: any) => estudiante.email === this.email).apellido;
        console.log(nombre);
        console.log(apellido);
        localStorage.setItem("Name", nombre);
        localStorage.setItem("Last Name",apellido);
        localStorage.setItem("Email", this.email);
        
      } else if(res.some((item: { email: any; }) => item.email === this.email) && res.some((item: { contrasena: any; }) => item.contrasena === this.hashedPassword)&&!this.email.includes('.est')){
        const estudianteEncontrado = res.find((estudiante: any) => estudiante.email === this.email);
       
        if (estudianteEncontrado) {
          const idEstudiante = estudianteEncontrado.id;
        } 
        this.router.navigate(['/home-adm']);
        this.presentToastGood('Resgistro exitoso');
        const nombre= res.find((estudiante: any) => estudiante.email === this.email).nombre;
        const apellido= res.find((estudiante: any) => estudiante.email === this.email).apellido;
        console.log(nombre);
        console.log(apellido);
        localStorage.setItem("Name", nombre);
        localStorage.setItem("id", estudianteEncontrado.id);
        localStorage.setItem("Last Name",apellido);
        localStorage.setItem("Email", this.email);
      } else if(res.some((item: { email: any; }) => item.email === this.email) && !res.some((item: { contrasena: any; }) => item.contrasena === this.password)){
       console.log( res.map((item: { constrasena: any; }) => item.constrasena));
        this.presentToast('Contraseña incorrecta');
      }else if (!res.some((item: { email: any; }) => item.email === this.email)){
        this.presentToast('El usuario no existe');
      }else{
        console.log( res.map((item: { contrasena: any; }) => item.contrasena));

        this.presentToast('Datos incorrectos');

      }
    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

  
    }

    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000, 
        position: 'bottom', 
        color: 'danger', 
      });
      toast.present();
    }

    async presentToast2(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 4000, 
        position: 'bottom', 
        color: 'danger', 
      });
      toast.present();
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

  

}
function enviarDatos() {
  throw new Error('Function not implemented.');
}

