import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasquetMatchesSecondEstPage } from './basquet-matches-second-est.page';

const routes: Routes = [
  {
    path: '',
    component: BasquetMatchesSecondEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasquetMatchesSecondEstPageRoutingModule {}
