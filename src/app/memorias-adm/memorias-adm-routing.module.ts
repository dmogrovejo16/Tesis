import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriasAdmPage } from './memorias-adm.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriasAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriasAdmPageRoutingModule {}
