import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyAdmPage } from './volley-adm.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyAdmPageRoutingModule {}
