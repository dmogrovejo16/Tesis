import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFutbolMatchesAdmPageRoutingModule } from './all-futbol-matches-adm-routing.module';

import { AllFutbolMatchesAdmPage } from './all-futbol-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFutbolMatchesAdmPageRoutingModule
  ],
  declarations: [AllFutbolMatchesAdmPage]
})
export class AllFutbolMatchesAdmPageModule {}
