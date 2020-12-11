import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';

const routes: Routes = [
    { path: '', component: AdminMainComponent },
    // { path: '/detail/:id', component: AdminDetailComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }