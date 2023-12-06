import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    constructor(private loginService:LoginServiceService){}


    public isLoggedAdmin():boolean{
      return this.loginService.isLoggedAdmin();
    }

}
