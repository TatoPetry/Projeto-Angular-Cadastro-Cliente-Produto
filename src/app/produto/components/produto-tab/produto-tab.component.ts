import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-tab',
  template: `
    <nav mat-tab-nav-bar backgroundColor="primary">

      <a mat-tab-link
        routerLink="./"
        routerLinkActive
        #produtosRla="routerLinkActive"
        [active]="produtosRla.isActive"
        [routerLinkActiveOptions]="{exact: true}">
          Produtos
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
export class ProdutoTabComponent {}
