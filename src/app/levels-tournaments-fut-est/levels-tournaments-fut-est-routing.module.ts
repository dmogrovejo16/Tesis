import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsTournamentsFutEstPage } from './levels-tournaments-fut-est.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsTournamentsFutEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsTournamentsFutEstPageRoutingModule {}
