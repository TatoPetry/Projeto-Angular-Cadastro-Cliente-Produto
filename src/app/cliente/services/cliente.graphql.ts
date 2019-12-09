import gql from 'graphql-tag';
import { Cliente } from '../models/cliente.model';

export interface ClientesDadosQuery {
  allDados: Cliente[];
}

export interface ClienteQuery {
  Cliente: Cliente;
}

export const CLIENTE_DADOS_QUERY = gql`
  query ClientesDadosQuery($clienteId: ID!) {
    allClientes(
      filter: {
        user_some: {
          id: $clienteId
        }
      }
    ) {
      id
      nome
      email
      sexo
      cpf
      createdAt
      updatedAt
      endereco {
        id
        rua
        numero
        bairro
        cidade
        estado
      }
      telefones {
        dDD
        id
        numero
      }
      situacao {
        id
        situacao
      }
    }
  }
`;

export const CLIENTE_BY_ID = gql`
  query ClienteById($clienteId: ID!) {

    Cliente(
      id: $clienteId
    ) {
      id
      nome
      email
      sexo
      cpf
      createdAt
      updatedAt
      endereco {
        id
        rua
        numero
        bairro
        cidade
        estado
      }
      telefones {
        dDD
        id
        numero
      }
      situacao {
        id
        situacao
      }
    }
  }
`;
