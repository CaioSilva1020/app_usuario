import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../../entidades/Login';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }
  public login: Login = new Login();

  ngOnInit(): void {
    this.login = new Login();
  }

  onSubmit(log: any): void {
    //var json = JSON.stringify(login);
    this.loginService.logar(this.login).then(retorno => {
      var token = retorno['token'];
      localStorage.setItem('Token', token);
      this.router.navigate(['/home']);
    });
  }

}
