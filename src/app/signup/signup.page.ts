import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  password: string = '';
  lastName: string = '';
  email: string = '';

  constructor(private loadingController: LoadingController, private router: Router,public _apiService: ApiService,private http: HttpClient,private toastController: ToastController, private route: ActivatedRoute) { 
  
  }

  hashPassword(password: string): string {
    return CryptoJS.SHA512(password).toString();
  }

  ngOnInit() {
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



  

  async addStudent(){

    const loading = await this.loadingController.create({ // Creamos el loading
      message: 'Verificando...',
      spinner: 'circles', // Puedes cambiar el tipo de spinner según tus preferencias
      translucent: true,
      cssClass: 'custom-loading' // Clase CSS personalizada para el loading
    });
    await loading.present();

    console.log(this.name,this.lastName,this.password,this.email);
 
   
    const hashedPassword = this.hashPassword(this.password);
    console.log("Contraseña original:", this.password);
    console.log("Contraseña hasheada:", hashedPassword);
     
if(this.email!=""&&this.password!=""&&this.name!=""&&this.lastName!=""){
if(!/\d/.test(this.name)&&!/\d/.test(this.lastName)){
if(this.password.length>=8){



if (this.email.includes('uets.edu.ec')&&this.email.includes('.')){
fetch('https://api.hunter.io/v2/email-verifier?email='+this.email+'&api_key=d862975c55fe01b6983079800546915ce7978248')
.then(response => response.json())
.then(data => {
  // Procesar la respuesta
  console.log(data);
  if (data.data.result == 'deliverable') {
    // La dirección de correo electrónico es válida
    console.log('La dirección de correo electrónico es válida.');
    let data = {
      name: this.name,
      lastName: this.lastName,
      password: this.password,
      email: this.email,
    }
  
    localStorage.setItem("Email",this.email); 
    localStorage.setItem("Name",this.name); 
    localStorage.setItem("lastName",this.lastName); 

    this._apiService.getStudents().subscribe((res:any)=>{   


      if(res.some((item: { email: any; }) => item.email === this.email)){
        loading.dismiss();

this.presentToastBad("Ya existe un usuario con ese correo");
      }else{

        this._apiService.addStudent(data).subscribe((res:any)=>{
    

          console.log("SUCCESS ===", res);
          console.log(this.name,this.lastName,this.password,this.email);
     
        
    this._apiService.getStudents().subscribe((res:any)=>{
    
      const estudianteEncontrado = res.find((estudiante: any) => estudiante.email === this.email);
      const idEstudiante = estudianteEncontrado.id;
      localStorage.setItem("id", estudianteEncontrado.id);
    
    
    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })
    
    if (!this.email.includes('.est') ) {
     
    this.router.navigate(['/input-area-adm']);
    loading.dismiss();

    }else {
      this.router.navigate(['/input-class-adm']);
      loading.dismiss();

    
    }
      },(error: any)=>{ 
        console.log("ERROR ===", error);
      })
      }

    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

 
  } else {
    loading.dismiss();
    this.presentToastBad("El correo no existe");

  }
})



  }else{
    loading.dismiss();
    this.presentToastBad("El correo debe ser del dominio: uets.edu.ec");
  }

}else{
  loading.dismiss();

this.presentToastBad("La contraseña debe ser mayor o igual a 8 caracteres");

}
}else{
  loading.dismiss();

  this.presentToastBad("El nombre no puede contener numeros");
}

}else{
  loading.dismiss();

  this.presentToastBad("Porfavor rellene todos los campos");
}
}
}
