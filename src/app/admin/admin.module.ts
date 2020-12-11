import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AdminMainComponent, AdminHeaderComponent, AdminItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
