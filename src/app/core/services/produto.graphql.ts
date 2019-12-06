import gql from 'graphql-tag';
import { Produtos } from '../models/produtos.model';

export interface AllProdutosQuery {
    allProdutos: Produtos[];
}

export const ALL_PRODUTOS_QUERY = gql`
  query AllProdutosQuery {
  allProdutoes(
      orderBy: nome_ASC
    ) {
      id
      nome
      valor
      grupo
    }
  }
`;
