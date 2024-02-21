import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputResultsMatchesBasqAdmPageRoutingModule } from './input-results-matches-basq-adm-routing.module';

import { InputResultsMatchesBasqAdmPage } from './input-results-matches-basq-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputResultsMatchesBasqAdmPageRoutingModule
  ],
  declarations: [InputResultsMatchesBasqAdmPage]
})
export class InputResultsMatchesBasqAdmPageModule {}
