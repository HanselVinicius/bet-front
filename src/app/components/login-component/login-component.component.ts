import { Component } from '@angular/core';
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

  constructor(private loginService:LoginServiceService){

  }

  public login(){
    this.loginService.login(this.email, this.password)
    .then((response) => {
      let user = User.fromJson(response);
      console.log(user);
      //roe para a pagina de apostas protegida
    })
    .catch((error) => {
      console.log(error);
      //fazer um dialog de erro no canto superior direito
    });
   }
}
