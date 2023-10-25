import { Injectable } from '@angular/core';
import { ApiClient } from '../../infra/ApiClient';
import LoginDto from '../../model/user/login/LoginDto';
import User from 'src/app/model/user/User';
@Injectable({
  providedIn: 'root'
})
//aqui esta nomeado errado o nome correto seria um authService devido a aqui ser o service de login e registro
export class LoginServiceService {
  private readonly API = '/v1/auth/login';
  constructor(private axios:ApiClient) {
  }

  public async login(user: string, password: string):Promise<User> {
    return this.axios.getClient().post(this.API,new LoginDto(user,password))
  }


  public isLogged():boolean{
    if(localStorage.getItem("USER")){
      return true;
    }else{
      return false;
    }
  }

}
