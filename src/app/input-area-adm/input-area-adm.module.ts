import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputAreaAdmPageRoutingModule } from './input-area-adm-routing.module';

import { InputAreaAdmPage } from './input-area-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputAreaAdmPageRoutingModule
  ],
  declarations: [InputAreaAdmPage]
})
export class InputAreaAdmPageModule {}
