export class Usuario {

  UsuarioId?: number;
  Nome: string;
  Cpf: string;
  Rg: string;
  DataNascimento?: string;


  constructor() {
    this.Nome = '';
    this.Cpf = '';
    this.Rg = '';
  }
}
