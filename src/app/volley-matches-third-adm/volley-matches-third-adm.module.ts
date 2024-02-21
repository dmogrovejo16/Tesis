import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyMatchesThirdAdmPageRoutingModule } from './volley-matches-third-adm-routing.module';

import { VolleyMatchesThirdAdmPage } from './volley-matches-third-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyMatchesThirdAdmPageRoutingModule
  ],
  declarations: [VolleyMatchesThirdAdmPage]
})
export class VolleyMatchesThirdAdmPageModule {}
