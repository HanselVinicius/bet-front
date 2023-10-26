import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private loginService:LoginServiceService,private toast:NgToastService,private router:Router){

  }

  public login(){
    this.loginService.login(this.email, this.password)
    .then((response) => {
      let user = User.fromJson(response);
      this.loginService.setLogged(user);
      this.toast.success({detail:"OK",summary:'Login efetuado com sucesso',sticky:false, position:'topRight'});
      this.router.navigate(['/bets']);
    })
    .catch((error) => {
      this.toast.error({detail:"ERRO",summary:'Falha ao executar login',sticky:false, position:'topRight'});
    });
   }
}
