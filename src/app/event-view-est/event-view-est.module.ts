import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventViewEstPageRoutingModule } from './event-view-est-routing.module';

import { EventViewEstPage } from './event-view-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventViewEstPageRoutingModule
  ],
  declarations: [EventViewEstPage]
})
export class EventViewEstPageModule {}
