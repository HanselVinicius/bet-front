import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { LoginServiceService } from "../services/login/login-service.service";

export function authenticationGuard():CanActivateFn{
  return ()=>{
    const loginService: LoginServiceService = inject(LoginServiceService)
    const router:Router = inject(Router)
    if(loginService.isLogged()){
      return true
    }
      router.navigate(["/forbidden"])
      return false;
  }
}
