import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',
  loadChildren: () => import('./auth/auth.module').then((m) =>m.AuthModule),
 },
 {
  path:'dev',
  loadChildren: () => import('./shell/shell.module').then((m) => m.ShellModule),
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
