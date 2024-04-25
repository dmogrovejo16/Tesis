import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEventAdmPageRoutingModule } from './create-event-adm-routing.module';

import { CreateEventAdmPage } from './create-event-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEventAdmPageRoutingModule
  ],
  declarations: [CreateEventAdmPage]
})
export class CreateEventAdmPageModule {}
