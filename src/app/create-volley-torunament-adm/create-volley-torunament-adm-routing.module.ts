import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVolleyTorunamentAdmPage } from './create-volley-torunament-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVolleyTorunamentAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVolleyTorunamentAdmPageRoutingModule {}
