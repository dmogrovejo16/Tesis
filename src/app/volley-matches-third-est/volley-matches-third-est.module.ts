import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyMatchesThirdEstPageRoutingModule } from './volley-matches-third-est-routing.module';

import { VolleyMatchesThirdEstPage } from './volley-matches-third-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyMatchesThirdEstPageRoutingModule
  ],
  declarations: [VolleyMatchesThirdEstPage]
})
export class VolleyMatchesThirdEstPageModule {}
