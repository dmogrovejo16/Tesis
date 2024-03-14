import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllVolleyMatchesAdmPageRoutingModule } from './all-volley-matches-adm-routing.module';

import { AllVolleyMatchesAdmPage } from './all-volley-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllVolleyMatchesAdmPageRoutingModule
  ],
  declarations: [AllVolleyMatchesAdmPage]
})
export class AllVolleyMatchesAdmPageModule {}
