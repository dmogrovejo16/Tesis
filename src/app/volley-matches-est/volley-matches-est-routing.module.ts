import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyMatchesEstPage } from './volley-matches-est.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyMatchesEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyMatchesEstPageRoutingModule {}
