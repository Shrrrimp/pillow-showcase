import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from '../core/core-routing.module';
import { HeaderComponent } from './header/header.component';
import { PillowComponent } from './pillow/pillow.component';
import { PillowListComponent } from './pillow-list/pillow-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, PillowComponent, PillowListComponent, MainPageComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
