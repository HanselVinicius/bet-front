import { Injectable } from '@angular/core';
import { ApiClient } from 'src/app/infra/ApiClient';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private axios:ApiClient) { }

  public async getAnimals(header:string){
    header = "Bearer "+header;
    return this.axios.getClient().get("/v1/animal",
    {headers:{Authorization:header},
    params:{page:0,size:10}});
  }



}
