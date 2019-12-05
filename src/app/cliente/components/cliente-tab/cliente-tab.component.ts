import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-tab',
  template: `
    <nav mat-tab-nav-bar backgroundColor="primary">

    <a mat-tab-link
        routerLink="./"
        routerLinkActive
        #clientesRla="routerLinkActive"
        [active]="clientesRla.isActive"
        [routerLinkActiveOptions]="{exact: true}">
          Clientes
      </a>

      <a mat-tab-link
        routerLink="cadastrar"
        routerLinkActive
        #cadastrarRla="routerLinkActive"
        [active]="cadastrarRla.isActive"
        >
          Cadastrar
      </a>

    </nav>

    <router-outlet></router-outlet>
  `
})
export class ClienteTabComponent {}
