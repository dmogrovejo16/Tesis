import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBasquetTorunamentAdmPage } from './create-basquet-torunament-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBasquetTorunamentAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBasquetTorunamentAdmPageRoutingModule {}
