import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventViewAdmPageRoutingModule } from './event-view-adm-routing.module';

import { EventViewAdmPage } from './event-view-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventViewAdmPageRoutingModule
  ],
  declarations: [EventViewAdmPage]
})
export class EventViewAdmPageModule {}
