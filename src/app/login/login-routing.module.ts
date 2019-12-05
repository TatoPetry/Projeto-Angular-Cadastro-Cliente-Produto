import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoLoginGuard } from './auto-login.guard';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [ AutoLoginGuard ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AutoLoginGuard ]
})
export class LoginRoutingModule { }
