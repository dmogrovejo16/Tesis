import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosViewAdmPage } from './photos-view-adm.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosViewAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosViewAdmPageRoutingModule {}
