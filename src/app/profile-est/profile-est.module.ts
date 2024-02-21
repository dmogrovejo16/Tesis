import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEstPageRoutingModule } from './profile-est-routing.module';

import { ProfileEstPage } from './profile-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEstPageRoutingModule
  ],
  declarations: [ProfileEstPage]
})
export class ProfileEstPageModule {}
