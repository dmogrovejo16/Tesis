import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBasquetMatchesEstPage } from './all-basquet-matches-est.page';

const routes: Routes = [
  {
    path: '',
    component: AllBasquetMatchesEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBasquetMatchesEstPageRoutingModule {}
