import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEstPageRoutingModule } from './home-est-routing.module';

import { HomeEstPage } from './home-est.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEstPageRoutingModule
  ],
  declarations: [HomeEstPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeEstPageModule {}
