import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllVolleyMatchesAdmPage } from './all-volley-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: AllVolleyMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllVolleyMatchesAdmPageRoutingModule {}
