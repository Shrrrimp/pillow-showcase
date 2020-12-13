import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillowComponent } from './pillow/pillow.component';
import { PillowListComponent } from '../shared/pillow-list/pillow-list.component';
import { PillowDetailsComponent } from './pillow-details/pillow-details.component';



@NgModule({
  declarations: [PillowComponent, PillowListComponent, PillowDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PillowComponent,
    PillowListComponent,
    PillowDetailsComponent
  ]
})
export class SharedModule { }
