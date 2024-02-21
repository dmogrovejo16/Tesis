import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasquetMatchesThirdEstPage } from './basquet-matches-third-est.page';

const routes: Routes = [
  {
    path: '',
    component: BasquetMatchesThirdEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasquetMatchesThirdEstPageRoutingModule {}
