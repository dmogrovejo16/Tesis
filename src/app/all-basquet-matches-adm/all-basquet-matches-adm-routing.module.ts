import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBasquetMatchesAdmPage } from './all-basquet-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: AllBasquetMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBasquetMatchesAdmPageRoutingModule {}
