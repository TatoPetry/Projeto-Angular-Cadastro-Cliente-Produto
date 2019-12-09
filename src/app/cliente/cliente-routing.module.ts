import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteTabComponent } from './components/cliente-tab/cliente-tab.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteWindowComponent } from './components/cliente-window/cliente-window.component';
import { ClienteWindowResolver } from './components/cliente-window/cliente-window.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClienteTabComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: 'cadastrar', component: ClienteCadastrarComponent },
      { path: '', component: ClienteListComponent },
    ]
  },
  {
    path: ':id',
    component: ClienteWindowComponent,
    canActivate: [ AuthGuard ],
    resolve: { cliente: ClienteWindowResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ ClienteWindowResolver ]
})
export class ClienteRoutingModule { }
