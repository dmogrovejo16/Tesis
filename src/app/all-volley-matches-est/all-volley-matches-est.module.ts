import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllVolleyMatchesEstPageRoutingModule } from './all-volley-matches-est-routing.module';

import { AllVolleyMatchesEstPage } from './all-volley-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllVolleyMatchesEstPageRoutingModule
  ],
  declarations: [AllVolleyMatchesEstPage]
})
export class AllVolleyMatchesEstPageModule {}
