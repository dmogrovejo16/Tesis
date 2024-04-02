import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirImagenAdmPage } from './subir-imagen-adm.page';

const routes: Routes = [
  {
    path: '',
    component: SubirImagenAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirImagenAdmPageRoutingModule {}
