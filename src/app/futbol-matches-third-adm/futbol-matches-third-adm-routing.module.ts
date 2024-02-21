import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolMatchesThirdAdmPage } from './futbol-matches-third-adm.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolMatchesThirdAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolMatchesThirdAdmPageRoutingModule {}
