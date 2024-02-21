import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyEstPage } from './volley-est.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyEstPageRoutingModule {}
