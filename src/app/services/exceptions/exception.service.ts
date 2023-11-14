import { Injectable } from '@angular/core';
import { ExceptionApiClient } from 'src/app/infra/clients/ExceptionsApiClient';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  constructor(private exceptionsClient:ExceptionApiClient) { }


  public async postException(signature:string,project_class:string,project_method:string):Promise<Exception>{
    const ex:Exception = {
      signature:signature,
      application:"front-end jogo do bixo",
      project_class:project_class,
      project_method:project_method,
    }
    return this.exceptionsClient.getClient().post('v1/exceptions', ex);
  }

}
