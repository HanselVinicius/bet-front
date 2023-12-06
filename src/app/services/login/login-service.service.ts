import { Injectable } from '@angular/core';
import { BixoApiClient } from '../../infra/clients/BixoApiClient';
import LoginDto from '../../model/user/login/LoginDto';
import User from 'src/app/model/user/User';
import { CookieService } from 'ngx-cookie-service';
import { UserRole } from 'src/app/model/user/UserRole';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private readonly route = '/v1/auth/login';
  constructor(
    private axios: BixoApiClient,
    private cookieService: CookieService
  ) {}

  public async login(user: string, password: string): Promise<User> {
    return this.axios
      .getClient()
      .post(this.route, new LoginDto(user, password));
  }

  public isLogged(): boolean {
    if (this.cookieService.get('USER')) {
      return true;
    } else {
      return false;
    }
  }

  public isLoggedAdmin(): boolean {
    if (!this.cookieService.get('USER')) {
      return false;
    }
    let user: User = JSON.parse(this.cookieService.get('USER'));
    if (user.role != UserRole.ADMIN) {
      return false;
    }
    return true;
  }

  public setLogged(user: User) {
    this.cookieService.set('USER', JSON.stringify(user), {
      expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    });
  }
}
