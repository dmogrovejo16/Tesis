import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventViewEstPage } from './event-view-est.page';

const routes: Routes = [
  {
    path: '',
    component: EventViewEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventViewEstPageRoutingModule {}
