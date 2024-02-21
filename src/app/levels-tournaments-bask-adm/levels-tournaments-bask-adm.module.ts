import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsTournamentsBaskAdmPageRoutingModule } from './levels-tournaments-bask-adm-routing.module';

import { LevelsTournamentsBaskAdmPage } from './levels-tournaments-bask-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsTournamentsBaskAdmPageRoutingModule
  ],
  declarations: [LevelsTournamentsBaskAdmPage]
})
export class LevelsTournamentsBaskAdmPageModule {}
