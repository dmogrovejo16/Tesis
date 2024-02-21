import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasquetMatchesThirdAdmPage } from './basquet-matches-third-adm.page';

const routes: Routes = [
  {
    path: '',
    component: BasquetMatchesThirdAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasquetMatchesThirdAdmPageRoutingModule {}
