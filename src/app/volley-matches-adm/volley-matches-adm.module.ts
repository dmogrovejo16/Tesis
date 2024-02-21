import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyMatchesAdmPageRoutingModule } from './volley-matches-adm-routing.module';

import { VolleyMatchesAdmPage } from './volley-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyMatchesAdmPageRoutingModule
  ],
  declarations: [VolleyMatchesAdmPage]
})
export class VolleyMatchesAdmPageModule {}
