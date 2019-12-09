import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Injectable()
export class ClienteWindowResolver implements Resolve<Cliente> {

  constructor(
    private clienteService: ClienteService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<Cliente> {
      const clienteById: string = route.paramMap.get('id');
      return this.clienteService.getClienteById(clienteById);
  }

}
