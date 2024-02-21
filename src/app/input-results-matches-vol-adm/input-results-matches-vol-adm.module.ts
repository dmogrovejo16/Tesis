import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputResultsMatchesVolAdmPageRoutingModule } from './input-results-matches-vol-adm-routing.module';

import { InputResultsMatchesVolAdmPage } from './input-results-matches-vol-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputResultsMatchesVolAdmPageRoutingModule
  ],
  declarations: [InputResultsMatchesVolAdmPage]
})
export class InputResultsMatchesVolAdmPageModule {}
