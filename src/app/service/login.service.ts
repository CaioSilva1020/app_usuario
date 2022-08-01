import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private http: HttpClient
  ) {
  }

  logar(login: any, carregarLoading: boolean = true, retornarObjeto: boolean = false, logado: boolean = false, exibirMsg: boolean = true): Promise<any> {
    //console.log(environment.apiAuthUrl + 'v1/Autenticacao/Logar');
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    var header = this.headers;
    return this.http.post(environment.apiAuthUrl + 'api/Autenticacao/Logar', login, { headers: header }).toPromise();
    //return this.global.post(login,'https://localhost:7174/api/Autoriza/login', carregarLoading, retornarObjeto, logado, exibirMsg);
  }

}
