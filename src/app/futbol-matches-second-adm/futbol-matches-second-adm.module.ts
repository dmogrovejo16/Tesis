import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolMatchesSecondAdmPageRoutingModule } from './futbol-matches-second-adm-routing.module';

import { FutbolMatchesSecondAdmPage } from './futbol-matches-second-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolMatchesSecondAdmPageRoutingModule
  ],
  declarations: [FutbolMatchesSecondAdmPage]
})
export class FutbolMatchesSecondAdmPageModule {}
