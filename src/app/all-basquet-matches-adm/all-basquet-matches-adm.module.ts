import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllBasquetMatchesAdmPageRoutingModule } from './all-basquet-matches-adm-routing.module';

import { AllBasquetMatchesAdmPage } from './all-basquet-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllBasquetMatchesAdmPageRoutingModule
  ],
  declarations: [AllBasquetMatchesAdmPage]
})
export class AllBasquetMatchesAdmPageModule {}
