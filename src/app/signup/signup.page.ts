import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  constructor(private router: Router,public _apiService: ApiService,private http: HttpClient,private toastController: ToastController, private route: ActivatedRoute) { 
  
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



  

  addStudent(){
    console.log(this.name,this.lastName,this.password,this.email);
 
   
    const hashedPassword = this.hashPassword(this.password);
    console.log("Contraseña original:", this.password);
    console.log("Contraseña hasheada:", hashedPassword);
     
if(this.email!=""&&this.password!=""&&this.name!=""&&this.lastName!=""){
if(!/\d/.test(this.name)&&!/\d/.test(this.lastName)){
if(this.password.length>=8){



if (this.email.includes('uets.edu.ec')&&this.email.includes('.')){




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
    }else {
      this.router.navigate(['/input-class-adm']);
    
    }
        
      },(error: any)=>{ 
        console.log("ERROR ===", error);
      })
      }

    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

 

  }else{
    this.presentToastBad("El correo debe ser del dominio: uets.edu.ec");
  }

}else{
this.presentToastBad("La contraseña debe ser mayor o igual a 8 caracteres");

}
}else{
  this.presentToastBad("El nombre no puede contener numeros");
}

}else{
  this.presentToastBad("Porfavor rellene todos los campos");
}
}
}
