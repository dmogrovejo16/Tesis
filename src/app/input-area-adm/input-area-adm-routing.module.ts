import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputAreaAdmPage } from './input-area-adm.page';

const routes: Routes = [
  {
    path: '',
    component: InputAreaAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputAreaAdmPageRoutingModule {}
