import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresensiEditPageRoutingModule } from './presensi-edit-routing.module';

import { PresensiEditPage } from './presensi-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresensiEditPageRoutingModule
  ],
  declarations: [PresensiEditPage]
})
export class PresensiEditPageModule {}
