import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateImagenAdmPage } from './create-imagen-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateImagenAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateImagenAdmPageRoutingModule {}
