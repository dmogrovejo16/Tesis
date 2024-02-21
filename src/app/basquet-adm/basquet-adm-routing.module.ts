import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasquetAdmPage } from './basquet-adm.page';

const routes: Routes = [
  {
    path: '',
    component: BasquetAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasquetAdmPageRoutingModule {}
