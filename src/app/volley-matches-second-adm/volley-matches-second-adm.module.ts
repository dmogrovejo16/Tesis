import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyMatchesSecondAdmPageRoutingModule } from './volley-matches-second-adm-routing.module';

import { VolleyMatchesSecondAdmPage } from './volley-matches-second-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyMatchesSecondAdmPageRoutingModule
  ],
  declarations: [VolleyMatchesSecondAdmPage]
})
export class VolleyMatchesSecondAdmPageModule {}
