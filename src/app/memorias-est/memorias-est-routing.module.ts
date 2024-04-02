import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriasEstPage } from './memorias-est.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriasEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriasEstPageRoutingModule {}
