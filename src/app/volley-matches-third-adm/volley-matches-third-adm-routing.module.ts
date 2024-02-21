import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyMatchesThirdAdmPage } from './volley-matches-third-adm.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyMatchesThirdAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyMatchesThirdAdmPageRoutingModule {}
