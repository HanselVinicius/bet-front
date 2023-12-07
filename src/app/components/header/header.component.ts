import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { DialogRegisterAnimalComponent } from '../utils/dialog-register-animal/dialog-register-animal.component';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { ExceptionService } from 'src/app/services/exceptions/exception.service';
import { NgToastService } from 'ng-angular-popup';
import { RegisterAnimalDto } from 'src/app/model/animal/RegisterAnimalDto';
import { SharedRegistrationService } from 'src/app/services/shared_services/SharedRegistrationService';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

    constructor(private loginService:LoginServiceService,private matDialog:MatDialog,private animalService:AnimalService,private exceptionService:ExceptionService,
      private toast:NgToastService,private sharedRegistration:SharedRegistrationService){}

    public openDialog(){
      this.matDialog.open(DialogRegisterAnimalComponent,{}).afterClosed().subscribe(result => {
        let animal:RegisterAnimalDto = {
          name:result
        }
        this.animalService.registerAnimal(animal).then((response)=>{
          this.toast.success({detail:"SUCESSO",summary:'Registro do animal efetuado com sucesso',sticky:false, position:'topRight'});
          this.sharedRegistration.emitAnimalRegistered();
        }).catch((error)=>{
          this.exceptionService.postException(error.stack,"HeaderComponent","openDialog");
          this.toast.error({detail:"ERRO",summary:'Falha ao executar registro do animal',sticky:false, position:'topRight'});
        });
      });
    }

    public isLoggedAdmin():boolean{
      return this.loginService.isLoggedAdmin();
    }

}
