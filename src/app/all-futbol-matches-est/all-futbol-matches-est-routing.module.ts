import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFutbolMatchesEstPage } from './all-futbol-matches-est.page';

const routes: Routes = [
  {
    path: '',
    component: AllFutbolMatchesEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllFutbolMatchesEstPageRoutingModule {}
