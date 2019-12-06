import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Clientes } from 'src/app/core/models/clientes.model';
import { ClientesService } from 'src/app/core/services/clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes$: Observable<Clientes[]>;

  constructor(
    private clienteServices: ClientesService
  ) { }

  ngOnInit() {
    this.clientes$ = this.clienteServices.allClientes();
  }

}
