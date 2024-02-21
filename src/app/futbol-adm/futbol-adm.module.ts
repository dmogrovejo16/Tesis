import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolAdmPageRoutingModule } from './futbol-adm-routing.module';

import { FutbolAdmPage } from './futbol-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolAdmPageRoutingModule
  ],
  declarations: [FutbolAdmPage]
})
export class FutbolAdmPageModule {}
