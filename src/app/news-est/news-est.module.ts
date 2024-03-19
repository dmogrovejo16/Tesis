import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsEstPageRoutingModule } from './news-est-routing.module';

import { NewsEstPage } from './news-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsEstPageRoutingModule
  ],
  declarations: [NewsEstPage]
})
export class NewsEstPageModule {}
