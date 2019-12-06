import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Produtos } from '../models/produtos.model';
import { AllProdutosQuery, ALL_PRODUTOS_QUERY } from './produto.graphql';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private apollo: Apollo
  ) { }

  allProdutos(): Observable<Produtos[]> {
    return this.apollo
      .query<AllProdutosQuery>({
        query: ALL_PRODUTOS_QUERY
      }).pipe(
        map(res => res.data.allProdutos)
      );
  }
}
