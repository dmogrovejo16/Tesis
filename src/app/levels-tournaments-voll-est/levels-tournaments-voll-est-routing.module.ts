import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsTournamentsVollEstPage } from './levels-tournaments-voll-est.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsTournamentsVollEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsTournamentsVollEstPageRoutingModule {}
