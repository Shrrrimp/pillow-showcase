import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './pages/admin-main/admin-main.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';
import { PillowFormComponent } from './pillow-form/pillow-form.component';
import { EditPillowComponent } from './pages/edit-pillow/edit-pillow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPillowComponent } from './pages/add-pillow/add-pillow.component';



@NgModule({
  declarations: [AdminMainComponent, AdminHeaderComponent, AdminDetailComponent, PillowFormComponent, EditPillowComponent, AddPillowComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
