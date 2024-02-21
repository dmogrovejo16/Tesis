import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsTournamentsBaskEstPage } from './levels-tournaments-bask-est.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsTournamentsBaskEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsTournamentsBaskEstPageRoutingModule {}
