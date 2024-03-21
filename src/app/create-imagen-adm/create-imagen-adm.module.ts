import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateImagenAdmPageRoutingModule } from './create-imagen-adm-routing.module';

import { CreateImagenAdmPage } from './create-imagen-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateImagenAdmPageRoutingModule
  ],
  declarations: [CreateImagenAdmPage]
})
export class CreateImagenAdmPageModule {}
