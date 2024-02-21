import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFutbolTorunamentAdmPage } from './create-futbol-torunament-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateFutbolTorunamentAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFutbolTorunamentAdmPageRoutingModule {}
