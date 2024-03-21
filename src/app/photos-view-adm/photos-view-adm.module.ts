import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosViewAdmPageRoutingModule } from './photos-view-adm-routing.module';

import { PhotosViewAdmPage } from './photos-view-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosViewAdmPageRoutingModule
  ],
  declarations: [PhotosViewAdmPage]
})
export class PhotosViewAdmPageModule {}
