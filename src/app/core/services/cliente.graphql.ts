import gql from 'graphql-tag';
import { Clientes } from '../models/clientes.model';

export interface AllClienteQuery {
    allClientes: Clientes[];
}

export const ALL_CLIENTES_QUERY = gql`
  query allClientesQuery {
    allClientes (
      orderBy: nome_ASC
    ) {
      id
      nome
      email
    }
  }
`;
