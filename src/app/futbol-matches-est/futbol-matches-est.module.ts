import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolMatchesEstPageRoutingModule } from './futbol-matches-est-routing.module';

import { FutbolMatchesEstPage } from './futbol-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolMatchesEstPageRoutingModule
  ],
  declarations: [FutbolMatchesEstPage]
})
export class FutbolMatchesEstPageModule {}
