import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreateFutbolTorunamentAdmPageRoutingModule } from './create-futbol-torunament-adm-routing.module';

import { CreateFutbolTorunamentAdmPage } from './create-futbol-torunament-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CreateFutbolTorunamentAdmPageRoutingModule
  ],
  declarations: [CreateFutbolTorunamentAdmPage]
})
export class CreateFutbolTorunamentAdmPageModule {}
export class ViewsModule {}
