import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsTournamentsFutEstPageRoutingModule } from './levels-tournaments-fut-est-routing.module';

import { LevelsTournamentsFutEstPage } from './levels-tournaments-fut-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsTournamentsFutEstPageRoutingModule
  ],
  declarations: [LevelsTournamentsFutEstPage]
})
export class LevelsTournamentsFutEstPageModule {}
