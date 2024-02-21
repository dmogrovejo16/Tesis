import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolEstPageRoutingModule } from './futbol-est-routing.module';

import { FutbolEstPage } from './futbol-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolEstPageRoutingModule
  ],
  declarations: [FutbolEstPage]
})
export class FutbolEstPageModule {}
