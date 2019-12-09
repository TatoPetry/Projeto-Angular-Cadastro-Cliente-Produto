import { Injectable } from '@angular/core';

import { ProdutoModule } from '../produto.module';

@Injectable({
  providedIn: ProdutoModule
})
export class ProdutoService {

  constructor() { }
}
