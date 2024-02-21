import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVolleyMatchAdmPage } from './create-volley-match-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVolleyMatchAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVolleyMatchAdmPageRoutingModule {}
