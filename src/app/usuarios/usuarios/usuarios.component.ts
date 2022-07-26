import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../entidades/Usuario';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  //listaUsuarios: Usuario[] = new Array<Usuario>();
  usuario: Usuario = new Usuario();
  listaUsuarios: any = [];
  boolAdicionar: boolean = false;
  abreDetalhe: boolean = false;

  constructor(private usuarioService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.listarUsuarios().then(retorno => {
      this.listaUsuarios = retorno;
    });
  }

  salvarUsuario() {
    this.usuarioService.salvarUsuario(this.usuario).then(retorno => {      
      this.usuario.UsuarioId = retorno.usuarioId;
      this.usuario.Nome = retorno.nome;
      this.usuario.Cpf = retorno.cpf;
      this.usuario.Rg = retorno.rg;
      this.usuario.DataNascimento = retorno.dataNascimento;
      this.boolAdicionar = false;
      this.abreDetalhe = true;
    });
  }

  abrirAdicionar() {
    this.boolAdicionar = true;
  }

  abrirLista() {
    this.buscarUsuarios();
    this.boolAdicionar = false;
    this.abreDetalhe = false;
    this.usuario = new Usuario();
  }

}
