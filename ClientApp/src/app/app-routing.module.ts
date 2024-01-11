import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'bo_cms',
    loadChildren: () => import('./modules/contentManagment/content-managment.module').then(m => m.ContentManagmentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
