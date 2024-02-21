import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolMatchesSecondEstPage } from './futbol-matches-second-est.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolMatchesSecondEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolMatchesSecondEstPageRoutingModule {}
