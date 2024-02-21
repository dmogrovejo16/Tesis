import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolMatchesThirdAdmPageRoutingModule } from './futbol-matches-third-adm-routing.module';

import { FutbolMatchesThirdAdmPage } from './futbol-matches-third-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolMatchesThirdAdmPageRoutingModule
  ],
  declarations: [FutbolMatchesThirdAdmPage]
})
export class FutbolMatchesThirdAdmPageModule {}
