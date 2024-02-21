import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasquetMatchesThirdAdmPageRoutingModule } from './basquet-matches-third-adm-routing.module';

import { BasquetMatchesThirdAdmPage } from './basquet-matches-third-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasquetMatchesThirdAdmPageRoutingModule
  ],
  declarations: [BasquetMatchesThirdAdmPage]
})
export class BasquetMatchesThirdAdmPageModule {}
