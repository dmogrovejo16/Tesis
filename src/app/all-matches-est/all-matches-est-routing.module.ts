import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMatchesEstPage } from './all-matches-est.page';

const routes: Routes = [
  {
    path: '',
    component: AllMatchesEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllMatchesEstPageRoutingModule {}
