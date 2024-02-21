import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyMatchesEstPageRoutingModule } from './volley-matches-est-routing.module';

import { VolleyMatchesEstPage } from './volley-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyMatchesEstPageRoutingModule
  ],
  declarations: [VolleyMatchesEstPage]
})
export class VolleyMatchesEstPageModule {}
