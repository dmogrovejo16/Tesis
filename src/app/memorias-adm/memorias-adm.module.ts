import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoriasAdmPageRoutingModule } from './memorias-adm-routing.module';

import { MemoriasAdmPage } from './memorias-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriasAdmPageRoutingModule
  ],
  declarations: [MemoriasAdmPage]
})
export class MemoriasAdmPageModule {}
