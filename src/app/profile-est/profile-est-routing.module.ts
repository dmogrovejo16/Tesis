import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEstPage } from './profile-est.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEstPageRoutingModule {}
