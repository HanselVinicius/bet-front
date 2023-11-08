import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiClient } from 'src/app/infra/ApiClient';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private apiClient:ApiClient,private cookieService:CookieService) { }

  public betInAnimal(animalName:string){
    return this.apiClient.getClienWithAuth(JSON.parse(this.cookieService.get("USER")).token).post("/v1/bet/register",{
      data:{data:animalName}
    });
  }



}
