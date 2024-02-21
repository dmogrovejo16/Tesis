import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyMatchesAdmPage } from './volley-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyMatchesAdmPageRoutingModule {}
