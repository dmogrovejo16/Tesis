import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBasquetMatchAdmPage } from './create-basquet-match-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBasquetMatchAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBasquetMatchAdmPageRoutingModule {}
