import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosViewEstPage } from './photos-view-est.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosViewEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosViewEstPageRoutingModule {}
