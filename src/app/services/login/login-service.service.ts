import { Injectable } from '@angular/core';
import { BixoApiClient } from '../../infra/clients/BixoApiClient';
import LoginDto from '../../model/user/login/LoginDto';
import User from 'src/app/model/user/User';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly route = '/v1/auth/login';
  constructor(private axios:BixoApiClient,private cookieService:CookieService) {
  }

  public async login(user: string, password: string):Promise<User> {
    return this.axios.getClient().post(this.route,new LoginDto(user,password))
  }


  public isLogged():boolean{
    if(this.cookieService.get("USER")){
      return true;
    }else{
      return false;
    }
  }

  public setLogged(user:User){
    this.cookieService.set("USER",JSON.stringify(user),{expires:new Date(new Date().getTime() + 2 * 60 * 60 * 1000)});
  }

}
