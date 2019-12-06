import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoTabComponent } from './components/produto-tab/produto-tab.component';
import { AuthGuard } from '../login/auth.guard';
import { ProdutoCadastrarComponent } from './components/produto-cadastrar/produto-cadastrar.component';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
