import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './core/pages/details/details.component';
import { AuthGuard } from './admin/guards/auth.guard';
import { AdminDetailComponent } from './admin/pages/admin-detail/admin-detail.component';
import { EditPillowComponent } from './admin/pages/edit-pillow/edit-pillow.component';
import { AddPillowComponent } from './admin/pages/add-pillow/add-pillow.component';
import { ContactComponent } from './core/pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  },
  { path: 'home/contact', component: ContactComponent },
  { path: 'home/detail/:id', component: DetailsComponent },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  { path: 'admin/add', component: AddPillowComponent },
  { path: 'admin/detail/:id', component: AdminDetailComponent },
  { path: 'admin/detail/edit/:id', component: EditPillowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
