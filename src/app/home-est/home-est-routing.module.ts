import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEstPage } from './home-est.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEstPageRoutingModule {}
