import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetMatchesAdmPageRoutingModule } from './basquet-matches-adm-routing.module';

import { BasquetMatchesAdmPage } from './basquet-matches-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetMatchesAdmPageRoutingModule
  ],
  declarations: [BasquetMatchesAdmPage]
})
export class BasquetMatchesAdmPageModule {}
