import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileAdmPage } from './profile-adm.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileAdmPageRoutingModule {}
