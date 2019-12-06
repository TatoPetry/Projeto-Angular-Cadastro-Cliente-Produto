import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Produtos } from 'src/app/core/models/produtos.model';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit {

  produtos$: Observable<Produtos[]>;

  constructor(
    private produtoServices: ProdutosService
  ) { }

  ngOnInit() {
    this.produtos$ = this.produtoServices.allProdutos();
  }

}
