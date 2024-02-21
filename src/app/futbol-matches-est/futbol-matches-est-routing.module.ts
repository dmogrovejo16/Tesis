import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolMatchesEstPage } from './futbol-matches-est.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolMatchesEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolMatchesEstPageRoutingModule {}
