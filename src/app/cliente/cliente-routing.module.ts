import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteTabComponent } from './components/cliente-tab/cliente-tab.component';
import { AuthGuard } from '../login/auth.guard';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';


const routes: Routes = [
  {
    path: '',
    component: ClienteTabComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: '', component: ClienteListComponent },
      { path: 'cadastrar', component: ClienteCadastrarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
