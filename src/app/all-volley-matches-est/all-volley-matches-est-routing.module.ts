import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllVolleyMatchesEstPage } from './all-volley-matches-est.page';

const routes: Routes = [
  {
    path: '',
    component: AllVolleyMatchesEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllVolleyMatchesEstPageRoutingModule {}
