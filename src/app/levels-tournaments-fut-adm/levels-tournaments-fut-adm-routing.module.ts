import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsTournamentsFutAdmPage } from './levels-tournaments-fut-adm.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsTournamentsFutAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsTournamentsFutAdmPageRoutingModule {}
