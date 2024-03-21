import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photos-view-adm',
  templateUrl: './photos-view-adm.page.html',
  styleUrls: ['./photos-view-adm.page.scss'],
})
export class PhotosViewAdmPage implements OnInit {
fotos:any[] | undefined;
  constructor(private router: Router,public _apiService: ApiService,private toastController: ToastController, private route: ActivatedRoute) {

    this._apiService.getImagenes().subscribe((res:any)=>{
this.fotos=res;
console.log(this.fotos);

    },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

   }

  ngOnInit() {
  }

}
