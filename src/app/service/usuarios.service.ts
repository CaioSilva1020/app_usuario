import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../entidades/Usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient
  ) {
  }

  listarUsuarios(carregarLoading: boolean = true, retornarObjeto: boolean = false, logado: boolean = false, exibirMsg: boolean = true): Promise<any> {
    //console.log(environment.apiAuthUrl + 'v1/Autenticacao/Logar');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getTokenUser() });
    var header = this.headers;
    return this.http.get(environment.apiUsuario + 'api/Usuarios/Listar', { headers: header }).toPromise();
  }

  salvarUsuario(usuario: Usuario, carregarLoading: boolean = true, retornarObjeto: boolean = false, logado: boolean = false, exibirMsg: boolean = true): Promise<any> {
    //console.log(environment.apiAuthUrl + 'v1/Autenticacao/Logar');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getTokenUser() });
    var header = this.headers;
    return this.http.post(environment.apiUsuario + 'api/Usuarios/Adicionar', usuario, { headers: header }).toPromise();
  }

  buscarUsuario(id: number, carregarLoading: boolean = true, retornarObjeto: boolean = false, logado: boolean = false, exibirMsg: boolean = true): Promise<any> {
    //console.log(environment.apiAuthUrl + 'v1/Autenticacao/Logar');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getTokenUser() });
    var header = this.headers;
    return this.http.get('https://localhost:7174/api/Usuarios/BuscaPorId/' + id, { headers: header }).toPromise();
  }

  editarUsuario(usuario: Usuario, carregarLoading: boolean = true, retornarObjeto: boolean = false, logado: boolean = false, exibirMsg: boolean = true): Promise<any> {
    //console.log(environment.apiAuthUrl + 'v1/Autenticacao/Logar');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getTokenUser() });
    var header = this.headers;
    return this.http.put(environment.apiUsuario + 'api/Usuarios/Editar/' + usuario.UsuarioId, usuario, { headers: header }).toPromise();
  }

  deletarUsuario(id: number, carregarLoading: boolean = true, retornarObjeto: boolean = false, logado: boolean = false, exibirMsg: boolean = true): Promise<any> {
    //console.log(environment.apiAuthUrl + 'v1/Autenticacao/Logar');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getTokenUser() });
    var header = this.headers;
    return this.http.delete(environment.apiUsuario + 'api/Usuarios/Delete/' + id, { headers: header }).toPromise();
  }

  getTokenUser() {
    return localStorage.getItem('Token');
  }

}
