import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolMatchesAdmPage } from './futbol-matches-adm.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolMatchesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolMatchesAdmPageRoutingModule {}
