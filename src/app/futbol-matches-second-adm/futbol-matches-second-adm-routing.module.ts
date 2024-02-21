import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolMatchesSecondAdmPage } from './futbol-matches-second-adm.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolMatchesSecondAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolMatchesSecondAdmPageRoutingModule {}
