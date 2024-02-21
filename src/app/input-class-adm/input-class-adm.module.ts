import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputClassAdmPageRoutingModule } from './input-class-adm-routing.module';

import { InputClassAdmPage } from './input-class-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputClassAdmPageRoutingModule
  ],
  declarations: [InputClassAdmPage]
})
export class InputClassAdmPageModule {}
