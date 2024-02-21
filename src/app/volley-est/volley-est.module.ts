import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyEstPageRoutingModule } from './volley-est-routing.module';

import { VolleyEstPage } from './volley-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyEstPageRoutingModule
  ],
  declarations: [VolleyEstPage]
})
export class VolleyEstPageModule {}
