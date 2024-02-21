import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolMatchesSecondEstPageRoutingModule } from './futbol-matches-second-est-routing.module';

import { FutbolMatchesSecondEstPage } from './futbol-matches-second-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolMatchesSecondEstPageRoutingModule
  ],
  declarations: [FutbolMatchesSecondEstPage]
})
export class FutbolMatchesSecondEstPageModule {}
