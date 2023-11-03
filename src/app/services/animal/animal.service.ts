import { Injectable } from '@angular/core';
import { ApiClient } from 'src/app/infra/ApiClient';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private axios:ApiClient) { }

  public async getAnimals(header:string,page:number,size:number){
    header = "Bearer "+header;
    return this.axios.getClienWithAuth(header).get("/v1/animal",
    {params:{page:page,size:size}});
  }

}
