import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetMatchesThirdEstPageRoutingModule } from './basquet-matches-third-est-routing.module';

import { BasquetMatchesThirdEstPage } from './basquet-matches-third-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetMatchesThirdEstPageRoutingModule
  ],
  declarations: [BasquetMatchesThirdEstPage]
})
export class BasquetMatchesThirdEstPageModule {}
