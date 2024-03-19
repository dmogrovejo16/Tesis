import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsEstPage } from './news-est.page';

const routes: Routes = [
  {
    path: '',
    component: NewsEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsEstPageRoutingModule {}
