import { User } from 'src/app/core/models/user.model';

export class Cliente {

  id?: string;
  nome?: string;
  email?: string;
  cpf?: string;
  sexo?: string;
  createdAt?: string;
  updatedAt?: string;
  telefones?: any[];
  endereco: any[];
  situacao: any[];
  user: User[];

}
