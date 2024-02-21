import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBasquetTorunamentAdmPageRoutingModule } from './create-basquet-torunament-adm-routing.module';

import { CreateBasquetTorunamentAdmPage } from './create-basquet-torunament-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBasquetTorunamentAdmPageRoutingModule
  ],
  declarations: [CreateBasquetTorunamentAdmPage]
})
export class CreateBasquetTorunamentAdmPageModule {}
