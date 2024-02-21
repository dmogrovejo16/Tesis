import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFutbolMatchAdmPage } from './create-futbol-match-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFutbolMatchAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFutbolMatchAdmPageRoutingModule {}
