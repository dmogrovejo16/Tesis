import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetMatchesEstPageRoutingModule } from './basquet-matches-est-routing.module';

import { BasquetMatchesEstPage } from './basquet-matches-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetMatchesEstPageRoutingModule
  ],
  declarations: [BasquetMatchesEstPage]
})
export class BasquetMatchesEstPageModule {}
