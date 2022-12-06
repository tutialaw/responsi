import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard], // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    canLoad: [AutoLoginGuard],
  },
  {
    path: 'presensi',
    loadChildren: () =>
      import('./presensi/presensi.module').then((m) => m.PresensiPageModule),
  },
  {
    path: 'presensi-tambah',
    loadChildren: () =>
      import('./presensi-tambah/presensi-tambah.module').then(
        (m) => m.PresensiTambahPageModule
      ),
  },
  {
    path: 'presensi-edit/:id',
    loadChildren: () =>
      import('./presensi-edit/presensi-edit.module').then(
        (m) => m.PresensiEditPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}