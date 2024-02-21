import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsTournamentsBaskEstPageRoutingModule } from './levels-tournaments-bask-est-routing.module';

import { LevelsTournamentsBaskEstPage } from './levels-tournaments-bask-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsTournamentsBaskEstPageRoutingModule
  ],
  declarations: [LevelsTournamentsBaskEstPage]
})
export class LevelsTournamentsBaskEstPageModule {}
