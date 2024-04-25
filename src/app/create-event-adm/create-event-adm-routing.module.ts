import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventAdmPage } from './create-event-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEventAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEventAdmPageRoutingModule {}
