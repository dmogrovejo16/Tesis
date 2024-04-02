import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoriasEstPageRoutingModule } from './memorias-est-routing.module';

import { MemoriasEstPage } from './memorias-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriasEstPageRoutingModule
  ],
  declarations: [MemoriasEstPage]
})
export class MemoriasEstPageModule {}
