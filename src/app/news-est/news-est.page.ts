import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map , filter, switchMap} from 'rxjs/operators';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-news-est',
  templateUrl: './news-est.page.html',
  styleUrls: ['./news-est.page.scss'],
})
export class NewsEstPage implements OnInit {
  channelID: any='@UETecnicoSalesiano';
  maxResults: any='5';
  googleToken: any='AIzaSyCDdngITEMZ8oBXw5UuJM10ejr3TvArEXk';
  search: any= 'a';
  posts:any=[];
    constructor(private http: HttpClient, private navCtrl: NavController) {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCDdngITEMZ8oBXw5UuJM10ejr3TvArEXk&channelId=UCcGCBVZSL_go2Xd6avCfXwQ&part=snippet,id&order=date&maxResults=10';   
      this.http.get(url).subscribe((response: any) => {
        this.posts = this.posts.concat(response.items);
        console.log(this.posts);
      })
    }
  
    ngOnInit() {
    }
  
    openVideo(videoId: string) {
      // Aquí deberías implementar la navegación al video correspondiente.
      // Esto puede ser usando un servicio de enrutamiento o cualquier otro método que estés utilizando en tu aplicación.
      // Por ejemplo, usando NavController en Ionic:
      const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
          window.open(youtubeUrl, '_blank');  }
  
  }
