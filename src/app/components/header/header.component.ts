import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    public isLogged:boolean = false;
    constructor(private loginService:LoginServiceService){
      
    }

  ngOnInit(): void {
    this.isLogged = this.loginService.isLogged();
  }



}
