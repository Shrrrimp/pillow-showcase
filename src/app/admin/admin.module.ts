import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { CoreModule } from 'src/app/core/core.module';
// import { PillowComponent } from 'src/app/shared/pillow/pillow.component';
// import { PillowListComponent } from 'src/app/shared/pillow-list/pillow-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AdminMainComponent, AdminHeaderComponent, AdminListComponent, AdminItemComponent],
  imports: [
    CommonModule,
    // CoreModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
