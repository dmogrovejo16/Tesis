import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVolleyMatchAdmPageRoutingModule } from './create-volley-match-adm-routing.module';

import { CreateVolleyMatchAdmPage } from './create-volley-match-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVolleyMatchAdmPageRoutingModule
  ],
  declarations: [CreateVolleyMatchAdmPage]
})
export class CreateVolleyMatchAdmPageModule {}
