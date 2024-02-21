import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsTournamentsVollAdmPageRoutingModule } from './levels-tournaments-voll-adm-routing.module';

import { LevelsTournamentsVollAdmPage } from './levels-tournaments-voll-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsTournamentsVollAdmPageRoutingModule
  ],
  declarations: [LevelsTournamentsVollAdmPage]
})
export class LevelsTournamentsVollAdmPageModule {}
