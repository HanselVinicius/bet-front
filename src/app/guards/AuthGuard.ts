import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { LoginServiceService } from "../services/login/login-service.service";

export function authenticationGuard():CanActivateFn{
  return ()=>{
    const loginService: LoginServiceService = inject(LoginServiceService)
    if(loginService.isLogged()){
      return true
    }
      return false;
  }
}
