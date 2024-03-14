import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllMatchesAdmPageRoutingModule } from './all-matches-adm-routing.module';

import { AllMatchesAdmPage } from './all-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllMatchesAdmPageRoutingModule
  ],
  declarations: [AllMatchesAdmPage]
})
export class AllMatchesAdmPageModule {}
