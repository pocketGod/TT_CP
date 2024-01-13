import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { FourOFourPageComponent } from './Views/pages/four-o-four-page/four-o-four-page.component';
import { FooterComponent } from './Views/components/layout/footer/footer.component';
import { NavbarComponent } from './Views/components/layout/navbar/navbar.component';
import { SidenavComponent } from './Views/components/layout/sidenav/sidenav.component';
import { PortfolioHomePageComponent } from './Views/pages/portfolio-home-page/portfolio-home-page.component';
 



@NgModule({
  declarations: [
    PortfolioHomePageComponent,
    FourOFourPageComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
