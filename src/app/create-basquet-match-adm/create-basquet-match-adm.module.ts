import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBasquetMatchAdmPageRoutingModule } from './create-basquet-match-adm-routing.module';

import { CreateBasquetMatchAdmPage } from './create-basquet-match-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBasquetMatchAdmPageRoutingModule
  ],
  declarations: [CreateBasquetMatchAdmPage]
})
export class CreateBasquetMatchAdmPageModule {}
