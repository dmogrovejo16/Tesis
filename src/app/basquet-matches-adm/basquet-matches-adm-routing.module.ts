import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasquetMatchesAdmPage } from './basquet-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: BasquetMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasquetMatchesAdmPageRoutingModule {}
