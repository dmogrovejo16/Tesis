import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileAdmPageRoutingModule } from './profile-adm-routing.module';

import { ProfileAdmPage } from './profile-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileAdmPageRoutingModule
  ],
  declarations: [ProfileAdmPage]
})
export class ProfileAdmPageModule {}
