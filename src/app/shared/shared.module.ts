import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillowComponent } from './pillow/pillow.component';
import { PillowListComponent } from '../shared/pillow-list/pillow-list.component';



@NgModule({
  declarations: [PillowComponent, PillowListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PillowComponent,
    PillowListComponent
  ]
})
export class SharedModule { }
