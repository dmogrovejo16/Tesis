import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputResultsMatchesFutAdmPageRoutingModule } from './input-results-matches-fut-adm-routing.module';

import { InputResultsMatchesFutAdmPage } from './input-results-matches-fut-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputResultsMatchesFutAdmPageRoutingModule
  ],
  declarations: [InputResultsMatchesFutAdmPage]
})
export class InputResultsMatchesFutAdmPageModule {}
