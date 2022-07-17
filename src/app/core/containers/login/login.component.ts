import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public nomeUsuario: string = "";
  public senha: string = "";

  ngOnInit(): void {
    this.senha = "";
  }

  onSubmit(): void {
  }

}
