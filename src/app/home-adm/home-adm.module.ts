import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAdmPageRoutingModule } from './home-adm-routing.module';

import { HomeAdmPage } from './home-adm.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAdmPageRoutingModule
  ],
  declarations: [HomeAdmPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeAdmPageModule {}
