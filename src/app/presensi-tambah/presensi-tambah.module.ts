import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresensiTambahPageRoutingModule } from './presensi-tambah-routing.module';

import { PresensiTambahPage } from './presensi-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresensiTambahPageRoutingModule
  ],
  declarations: [PresensiTambahPage]
})
export class PresensiTambahPageModule {}
