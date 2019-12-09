import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoTabComponent } from './components/produto-tab/produto-tab.component';
import { ProdutoCadastrarComponent } from './components/produto-cadastrar/produto-cadastrar.component';
import { ProdutoWindowComponent } from './components/produto-window/produto-window.component';


const routes: Routes = [
  {
    path: '',
    component: ProdutoTabComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: 'cadastrar', component: ProdutoCadastrarComponent },
      { path: '', component: ProdutoListComponent },
    ]
  },
  { path: ':id', component: ProdutoWindowComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
