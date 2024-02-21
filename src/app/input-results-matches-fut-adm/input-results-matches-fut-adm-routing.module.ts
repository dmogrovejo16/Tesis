import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputResultsMatchesFutAdmPage } from './input-results-matches-fut-adm.page';

const routes: Routes = [
  {
    path: '',
    component: InputResultsMatchesFutAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputResultsMatchesFutAdmPageRoutingModule {}
