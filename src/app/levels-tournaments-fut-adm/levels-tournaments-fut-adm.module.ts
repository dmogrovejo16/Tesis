import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsTournamentsFutAdmPageRoutingModule } from './levels-tournaments-fut-adm-routing.module';

import { LevelsTournamentsFutAdmPage } from './levels-tournaments-fut-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsTournamentsFutAdmPageRoutingModule
  ],
  declarations: [LevelsTournamentsFutAdmPage]
})
export class LevelsTournamentsFutAdmPageModule {}
