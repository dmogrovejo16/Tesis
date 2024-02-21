import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutbolEstPage } from './futbol-est.page';

const routes: Routes = [
  {
    path: '',
    component: FutbolEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutbolEstPageRoutingModule {}
