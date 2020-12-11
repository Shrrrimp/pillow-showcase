import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from '../core/core-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, MainPageComponent, FooterComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
