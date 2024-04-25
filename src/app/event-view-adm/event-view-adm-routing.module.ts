import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventViewAdmPage } from './event-view-adm.page';

const routes: Routes = [
  {
    path: '',
    component: EventViewAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventViewAdmPageRoutingModule {}
