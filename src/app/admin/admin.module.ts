import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminItemComponent } from './admin-item/admin-item.component';



@NgModule({
  declarations: [AdminMainComponent, AdminHeaderComponent, AdminListComponent, AdminItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
