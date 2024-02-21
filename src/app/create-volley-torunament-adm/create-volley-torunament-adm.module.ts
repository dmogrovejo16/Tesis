import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVolleyTorunamentAdmPageRoutingModule } from './create-volley-torunament-adm-routing.module';

import { CreateVolleyTorunamentAdmPage } from './create-volley-torunament-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVolleyTorunamentAdmPageRoutingModule
  ],
  declarations: [CreateVolleyTorunamentAdmPage]
})
export class CreateVolleyTorunamentAdmPageModule {}
