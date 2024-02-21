import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyAdmPageRoutingModule } from './volley-adm-routing.module';

import { VolleyAdmPage } from './volley-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyAdmPageRoutingModule
  ],
  declarations: [VolleyAdmPage]
})
export class VolleyAdmPageModule {}
