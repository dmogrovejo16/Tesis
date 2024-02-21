import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolAdmPage } from './futbol-adm.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolAdmPageRoutingModule {}
