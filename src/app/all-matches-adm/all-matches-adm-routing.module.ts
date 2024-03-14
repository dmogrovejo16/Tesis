import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMatchesAdmPage } from './all-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: AllMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllMatchesAdmPageRoutingModule {}
