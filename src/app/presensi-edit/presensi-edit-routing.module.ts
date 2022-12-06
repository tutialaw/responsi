import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresensiEditPage } from './presensi-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PresensiEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresensiEditPageRoutingModule {}
