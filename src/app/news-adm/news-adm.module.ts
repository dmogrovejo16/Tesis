import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsAdmPageRoutingModule } from './news-adm-routing.module';

import { NewsAdmPage } from './news-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsAdmPageRoutingModule
  ],
  declarations: [NewsAdmPage]
})
export class NewsAdmPageModule {}
