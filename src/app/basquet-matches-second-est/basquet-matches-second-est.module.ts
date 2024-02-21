import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetMatchesSecondEstPageRoutingModule } from './basquet-matches-second-est-routing.module';

import { BasquetMatchesSecondEstPage } from './basquet-matches-second-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetMatchesSecondEstPageRoutingModule
  ],
  declarations: [BasquetMatchesSecondEstPage]
})
export class BasquetMatchesSecondEstPageModule {}
