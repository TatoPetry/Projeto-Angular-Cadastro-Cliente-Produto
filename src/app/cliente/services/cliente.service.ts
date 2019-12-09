import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { ClienteModule } from '../cliente.module';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ClientesDadosQuery, CLIENTE_DADOS_QUERY, CLIENTE_BY_ID, ClienteQuery } from './cliente.graphql';
import { map } from 'rxjs/operators';
import { AllClienteQuery } from 'src/app/core/services/cliente.graphql';

@Injectable({
  providedIn: ClienteModule
})
export class ClienteService {

  constructor(
    private apollo: Apollo,
    private authservice: AuthService
  ) { }

  getClienteDados(): Observable<Cliente[]> {
    return this.apollo.query<ClientesDadosQuery>({
      query: CLIENTE_DADOS_QUERY,
      variables: {
        userId: this.authservice.authUser.id
      }
    }).pipe(
      map(res => res.data.allDados)
    );
  }

  getClienteById(clienteById: string): Observable<Cliente> {
    return this.apollo.query<ClienteQuery | AllClienteQuery>({
      query: CLIENTE_BY_ID,
      variables: {
        clienteId: clienteById
      }
    }).pipe(
      // tslint:disable-next-line:no-string-literal
      map(res => (res.data['Cliente']) ? res.data['Cliente'] : res.data['allClientes'][0])
    );
  }

}
