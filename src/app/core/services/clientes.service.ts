import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private apollo: Apollo
  ) { }

  allClientes(): Observable<Clientes[]> {
    return this.apollo
      .query({
        query: ALL_CLIENTES_QUERY  
      })
  }
}
