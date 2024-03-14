import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFutbolMatchesAdmPage } from './all-futbol-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: AllFutbolMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllFutbolMatchesAdmPageRoutingModule {}
