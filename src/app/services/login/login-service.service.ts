import { Injectable } from '@angular/core';
import { ApiClient } from '../../infra/ApiClient';
import LoginDto from '../../model/user/login/LoginDto';
import User from 'src/app/model/user/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private readonly API = '/v1/auth/login';
  private token: string = '';
  constructor(private axios:ApiClient) {
  }

  public async login(user: string, password: string):Promise<User> {
    return this.axios.getClient().post('/v1/auth/login',new LoginDto(user,password))
  }

}
