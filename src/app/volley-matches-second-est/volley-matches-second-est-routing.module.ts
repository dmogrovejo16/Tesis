import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyMatchesSecondEstPage } from './volley-matches-second-est.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyMatchesSecondEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyMatchesSecondEstPageRoutingModule {}
