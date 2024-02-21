import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolMatchesThirdEstPageRoutingModule } from './futbol-matches-third-est-routing.module';

import { FutbolMatchesThirdEstPage } from './futbol-matches-third-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolMatchesThirdEstPageRoutingModule
  ],
  declarations: [FutbolMatchesThirdEstPage]
})
export class FutbolMatchesThirdEstPageModule {}
