import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyMatchesThirdEstPage } from './volley-matches-third-est.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyMatchesThirdEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyMatchesThirdEstPageRoutingModule {}
