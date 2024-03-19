import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsAdmPage } from './news-adm.page';

const routes: Routes = [
  {
    path: '',
    component: NewsAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsAdmPageRoutingModule {}
