import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-view-adm',
  templateUrl: './event-view-adm.page.html',
  styleUrls: ['./event-view-adm.page.scss'],
})
export class EventViewAdmPage implements OnInit {
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

  ngOnInit() {
  }

}
