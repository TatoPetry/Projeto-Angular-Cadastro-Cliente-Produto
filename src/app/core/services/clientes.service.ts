import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Clientes } from '../models/clientes.model';
import { AllClienteQuery, ALL_CLIENTES_QUERY } from './cliente.graphql';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private apollo: Apollo
  ) { }

  allClientes(): Observable<Clientes[]> {
    return this.apollo
      .query<AllClienteQuery>({
        query: ALL_CLIENTES_QUERY
      }).pipe(
        map(res => res.data.allClientes)
      );
  }
}
