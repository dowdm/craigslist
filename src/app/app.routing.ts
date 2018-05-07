import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PostComponent } from './post/post.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'for-sale',
    component: MarketplaceComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'sales/:id',
    component: SaleDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
