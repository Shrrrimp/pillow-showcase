import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';



@NgModule({
  declarations: [AdminMainComponent, AdminHeaderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
