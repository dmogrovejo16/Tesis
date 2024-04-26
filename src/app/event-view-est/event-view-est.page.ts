import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-view-est',
  templateUrl: './event-view-est.page.html',
  styleUrls: ['./event-view-est.page.scss'],
})
export class EventViewEstPage implements OnInit {


  name:any;
  fecha:any;
  desc:any;
  lugar:any;
  url:any;
    constructor() {
      this.url=localStorage.getItem("urlEvento")
      this.name=localStorage.getItem("nameEvento");
      this.fecha=localStorage.getItem("fechaEvento");
      this.lugar=localStorage.getItem("lugarEvento");
      this.desc=localStorage.getItem("descEvento");
     }
  
  
     handleRefresh(event:any) {
      this.ngOnInit();
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 1500);
    }
  
    ngOnInit() {
      this.url=localStorage.getItem("urlEvento")
      this.name=localStorage.getItem("nameEvento");
      this.fecha=localStorage.getItem("fechaEvento");
      this.lugar=localStorage.getItem("lugarEvento");
      this.desc=localStorage.getItem("descEvento");
    }
  

}
