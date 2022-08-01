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
  boolEditar: boolean = false;
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

  buscarUsuario(usuario: any) {
    var id = usuario.usuarioId != undefined && usuario.usuarioId != null ? usuario.usuarioId : 0;
    if (id = 0) {
      alert("erro ao buscar usuário!");
    }
    this.usuario.UsuarioId = usuario.usuarioId;
    this.usuario.Nome = usuario.nome;
    this.usuario.Cpf = usuario.cpf;
    this.usuario.Rg = usuario.rg;
    this.usuario.DataNascimento = new Date(usuario.dataNascimento).toISOString().split('T')[0];
    this.boolAdicionar = false;
    this.boolEditar = false;
    this.abreDetalhe = true;
  }

  editarUsuario() {
    this.usuarioService.editarUsuario(this.usuario).then(retorno => {
      this.usuario.UsuarioId = retorno.usuarioId;
      this.usuario.Nome = retorno.nome;
      this.usuario.Cpf = retorno.cpf;
      this.usuario.Rg = retorno.rg;
      this.usuario.DataNascimento = retorno.dataNascimento;
      this.boolEditar = false;
      this.abreDetalhe = true;
    });
  }

  deletarUsuario(usuario: any) {
    console.log(usuario);
    var id = usuario.usuarioId != undefined && usuario.usuarioId != null ? usuario.usuarioId : 0;
    this.usuarioService.deletarUsuario(id).then(retorno => {
      this.buscarUsuarios();
      this.boolAdicionar = false;
      this.boolEditar = false;
      this.abreDetalhe = false;
      this.usuario = new Usuario();
    });
  }

  abrirAdicionar() {
    this.boolAdicionar = true;
    this.abreDetalhe = false;
  }

  abrirEditar() {
    this.boolEditar = true;
    this.abreDetalhe = false;
  }

  abrirLista() {
    this.buscarUsuarios();
    this.boolAdicionar = false;
    this.boolEditar = false;
    this.abreDetalhe = false;
    this.usuario = new Usuario();
  }

}
