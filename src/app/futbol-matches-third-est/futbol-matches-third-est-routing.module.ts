import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolMatchesThirdEstPage } from './futbol-matches-third-est.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolMatchesThirdEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolMatchesThirdEstPageRoutingModule {}
