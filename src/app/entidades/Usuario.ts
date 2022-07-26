export class Usuario {

  UsuarioId?: number;
  Nome: string;
  Cpf: string;
  Rg: string;
  DataNascimento: Date;


  constructor() {
    this.Nome = '';
    this.Cpf = '';
    this.Rg = '';
    this.DataNascimento = new Date();
  }
}
