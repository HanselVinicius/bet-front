import { Injectable } from '@angular/core';
import { BixoApiClient } from 'src/app/infra/clients/BixoApiClient';
import RegisterDto from 'src/app/model/user/login/RegisterDto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly route = '/v1/auth/register';


  constructor(private axios:BixoApiClient) { }


  public async register(user: string, password: string,cpf:string):Promise<any> {
    return this.axios.getClient().post(this.route,new RegisterDto(user,password,cpf));
  }

}
