import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputResultsMatchesVolAdmPage } from './input-results-matches-vol-adm.page';

const routes: Routes = [
  {
    path: '',
    component: InputResultsMatchesVolAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputResultsMatchesVolAdmPageRoutingModule {}
