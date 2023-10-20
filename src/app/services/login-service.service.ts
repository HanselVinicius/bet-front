import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private readonly API = 'http://localhost:8080/v1/auth/login';

  constructor() { }
}
