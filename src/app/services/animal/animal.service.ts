import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiClient } from 'src/app/infra/ApiClient';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private axios:ApiClient,private cookieService:CookieService) { }

  public async getAnimals(page:number,size:number){
    let header = "Bearer "+JSON.parse(this.cookieService.get("USER")).token;
    return this.axios.getClienWithAuth(header).get("/v1/animal",
    {params:{page:page,size:size}});
  }

}
