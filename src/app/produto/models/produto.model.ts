import { User } from 'src/app/core/models/user.model';

export class Produto {

  id?: string;
  nome?: string;
  valor?: string;
  ultimoValor?: string;
  descricao?: string;  grupo: string;  createdAt: string;
  updatedAt?: string;
  user: User[];

}
