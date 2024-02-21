import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateFutbolMatchAdmPageRoutingModule } from './create-futbol-match-adm-routing.module';

import { CreateFutbolMatchAdmPage } from './create-futbol-match-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateFutbolMatchAdmPageRoutingModule
  ],
  declarations: [CreateFutbolMatchAdmPage]
})
export class CreateFutbolMatchAdmPageModule {}
