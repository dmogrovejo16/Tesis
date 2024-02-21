import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputClassAdmPage } from './input-class-adm.page';

const routes: Routes = [
  {
    path: '',
    component: InputClassAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputClassAdmPageRoutingModule {}
