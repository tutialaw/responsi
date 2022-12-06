import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresensiTambahPage } from './presensi-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: PresensiTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresensiTambahPageRoutingModule {}
