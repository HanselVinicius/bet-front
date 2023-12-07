import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BixoApiClient } from 'src/app/infra/clients/BixoApiClient';
import { Animal } from 'src/app/model/animal/Animal';
import { RegisterAnimalDto } from 'src/app/model/animal/RegisterAnimalDto';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private axios:BixoApiClient,private cookieService:CookieService) { }

  public async getAnimals(page:number,size:number){
    let header = "Bearer "+JSON.parse(this.cookieService.get("USER")).token;
    return this.axios.getClienWithAuth(header).get("/v1/animal",
    {params:{page:page,size:size}});
  }

  public async registerAnimal(animal:RegisterAnimalDto){
    let header = "Bearer "+JSON.parse(this.cookieService.get("USER")).token;
    return this.axios.getClienWithAuth(header).post("/v1/animal",animal);
  }

}
