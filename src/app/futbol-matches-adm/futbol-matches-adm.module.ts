import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutbolMatchesAdmPageRoutingModule } from './futbol-matches-adm-routing.module';

import { FutbolMatchesAdmPage } from './futbol-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutbolMatchesAdmPageRoutingModule
  ],
  declarations: [FutbolMatchesAdmPage]
})
export class FutbolMatchesAdmPageModule {}
