import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetEstPageRoutingModule } from './basquet-est-routing.module';

import { BasquetEstPage } from './basquet-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetEstPageRoutingModule
  ],
  declarations: [BasquetEstPage]
})
export class BasquetEstPageModule {}
