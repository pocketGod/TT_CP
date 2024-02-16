import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioHomePageComponent } from './Views/pages/portfolio-home-page/portfolio-home-page.component';
import { SingleItemPageComponent } from './Views/pages/single-item-page/single-item-page.component';

const routes: Routes = [
  {
    path: '',
    component:PortfolioHomePageComponent
  },
  {
    path: 'item/:name', 
    component: SingleItemPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
