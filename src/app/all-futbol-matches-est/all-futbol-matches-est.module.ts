import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFutbolMatchesEstPageRoutingModule } from './all-futbol-matches-est-routing.module';

import { AllFutbolMatchesEstPage } from './all-futbol-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFutbolMatchesEstPageRoutingModule
  ],
  declarations: [AllFutbolMatchesEstPage]
})
export class AllFutbolMatchesEstPageModule {}
