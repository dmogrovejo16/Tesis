import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsTournamentsVollAdmPage } from './levels-tournaments-voll-adm.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsTournamentsVollAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsTournamentsVollAdmPageRoutingModule {}
