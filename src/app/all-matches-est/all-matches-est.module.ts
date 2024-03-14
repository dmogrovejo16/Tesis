import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllMatchesEstPageRoutingModule } from './all-matches-est-routing.module';

import { AllMatchesEstPage } from './all-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllMatchesEstPageRoutingModule
  ],
  declarations: [AllMatchesEstPage]
})
export class AllMatchesEstPageModule {}
