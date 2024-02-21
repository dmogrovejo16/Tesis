import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasquetEstPage } from './basquet-est.page';

const routes: Routes = [
  {
    path: '',
    component: BasquetEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasquetEstPageRoutingModule {}
