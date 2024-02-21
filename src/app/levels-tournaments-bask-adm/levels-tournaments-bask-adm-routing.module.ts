import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsTournamentsBaskAdmPage } from './levels-tournaments-bask-adm.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsTournamentsBaskAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsTournamentsBaskAdmPageRoutingModule {}
