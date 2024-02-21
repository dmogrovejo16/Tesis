import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsTournamentsVollEstPageRoutingModule } from './levels-tournaments-voll-est-routing.module';

import { LevelsTournamentsVollEstPage } from './levels-tournaments-voll-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsTournamentsVollEstPageRoutingModule
  ],
  declarations: [LevelsTournamentsVollEstPage]
})
export class LevelsTournamentsVollEstPageModule {}
