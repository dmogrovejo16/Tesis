import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllBasquetMatchesEstPageRoutingModule } from './all-basquet-matches-est-routing.module';

import { AllBasquetMatchesEstPage } from './all-basquet-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllBasquetMatchesEstPageRoutingModule
  ],
  declarations: [AllBasquetMatchesEstPage]
})
export class AllBasquetMatchesEstPageModule {}
