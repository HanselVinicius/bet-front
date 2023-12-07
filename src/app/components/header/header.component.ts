import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { DialogRegisterAnimalComponent } from '../utils/dialog-register-animal/dialog-register-animal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    constructor(private loginService:LoginServiceService,private matDialog:MatDialog){}

    public openDialog(){
      this.matDialog.open(DialogRegisterAnimalComponent,{}).afterClosed().subscribe(result => {console.log(result)});
    }

    public isLoggedAdmin():boolean{
      return this.loginService.isLoggedAdmin();
    }

}
