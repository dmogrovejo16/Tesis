import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyMatchesSecondEstPageRoutingModule } from './volley-matches-second-est-routing.module';

import { VolleyMatchesSecondEstPage } from './volley-matches-second-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyMatchesSecondEstPageRoutingModule
  ],
  declarations: [VolleyMatchesSecondEstPage]
})
export class VolleyMatchesSecondEstPageModule {}
