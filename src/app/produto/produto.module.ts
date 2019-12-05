import { NgModule } from '@angular/core';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoTabComponent } from './components/produto-tab/produto-tab.component';
import { SharedModule } from '../shared/shared.module';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoCadastrarComponent } from './components/produto-cadastrar/produto-cadastrar.component';


@NgModule({
  imports: [
    SharedModule,
    ProdutoRoutingModule
  ],
  declarations: [ProdutoTabComponent, ProdutoListComponent, ProdutoCadastrarComponent]
})
export class ProdutoModule { }
