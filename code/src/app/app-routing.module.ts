import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './sheared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './sheared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './sheared/components/layouts/blank-layout/blank-layout.component';
import { UserLayoutComponent } from './sheared/components/layouts/user-layout/user-layout.component';

const routes: Routes = [
    {
    path: '',
    component:BlankLayoutComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  },

    {
    path: 'auth',
    component:AuthLayoutComponent
  },

  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
