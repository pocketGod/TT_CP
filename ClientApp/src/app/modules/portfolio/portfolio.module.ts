import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { FourOFourPageComponent } from './Views/pages/four-o-four-page/four-o-four-page.component';
import { FooterComponent } from './Views/components/layout/footer/footer.component';
import { NavbarComponent } from './Views/components/layout/navbar/navbar.component';
import { SidenavComponent } from './Views/components/layout/sidenav/sidenav.component';
import { PortfolioHomePageComponent } from './Views/pages/portfolio-home-page/portfolio-home-page.component';
import { ItemsGridComponent } from './Views/components/building-blocks/items-grid/items-grid/items-grid.component';
import { ItemCellComponent } from './Views/components/building-blocks/items-grid/item-cell/item-cell.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './Views/components/building-blocks/about-us/about-us.component';
import { PopupGalleryComponent } from './Views/components/building-blocks/popup-gallery/popup-gallery.component';
import { SingleItemPageComponent } from './Views/pages/single-item-page/single-item-page.component';
import { ShowreelComponent } from './Views/components/building-blocks/showreel/showreel.component';
 



@NgModule({
  declarations: [
    PortfolioHomePageComponent,
    FourOFourPageComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    ItemsGridComponent,
    ItemCellComponent,
    AboutUsComponent,
    PopupGalleryComponent,
    ShowreelComponent,
    SingleItemPageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
