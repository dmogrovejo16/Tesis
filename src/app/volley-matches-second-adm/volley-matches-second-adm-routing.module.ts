import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyMatchesSecondAdmPage } from './volley-matches-second-adm.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyMatchesSecondAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyMatchesSecondAdmPageRoutingModule {}
