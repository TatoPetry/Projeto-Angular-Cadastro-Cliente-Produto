import { NgModule } from '@angular/core';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteTabComponent } from './components/cliente-tab/cliente-tab.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';


@NgModule({
  imports: [
    SharedModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteTabComponent, ClienteListComponent, ClienteCadastrarComponent]
})
export class ClienteModule { }
