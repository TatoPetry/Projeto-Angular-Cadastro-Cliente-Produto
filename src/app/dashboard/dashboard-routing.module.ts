import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';
import { DashboardResourcesComponent } from './component/dashboard-resources/dashboard-resources.component';


const routes: Routes = [
  {
    path: '',
     component: DashboardHomeComponent,
     canActivate: [ AuthGuard ],
     canActivateChild: [ AuthGuard ],
    children: [
      { path: 'cliente', loadChildren: './../cliente/cliente.module#ClienteModule', canLoad: [ AuthGuard ] },
      { path: 'produto', loadChildren: './../produto/produto.module#ProdutoModule', canLoad: [ AuthGuard ] },
      { path: '', component: DashboardResourcesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
