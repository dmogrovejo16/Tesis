import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosViewEstPageRoutingModule } from './photos-view-est-routing.module';

import { PhotosViewEstPage } from './photos-view-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosViewEstPageRoutingModule
  ],
  declarations: [PhotosViewEstPage]
})
export class PhotosViewEstPageModule {}
