import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetAdmPageRoutingModule } from './basquet-adm-routing.module';

import { BasquetAdmPage } from './basquet-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetAdmPageRoutingModule
  ],
  declarations: [BasquetAdmPage]
})
export class BasquetAdmPageModule {}
