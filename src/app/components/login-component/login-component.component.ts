import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import User from 'src/app/model/user/User';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  
  public email:string = '';
  public password:string = '';

  constructor(private loginService:LoginServiceService,private toast:NgToastService){

  }

  public login(){
    this.loginService.login(this.email, this.password)
    .then((response) => {
      let user = User.fromJson(response);
      console.log(user);
      //roe para a pagina de apostas protegida
    })
    .catch((error) => {
      this.toast.error({detail:"ERRO",summary:'Falha ao executar login',sticky:false, position:'topRight'});
    });
   }
}
