import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ExceptionService } from 'src/app/services/exceptions/exception.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],

})
export class RegisterFormComponent {
  public applyForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    cpf: new FormControl(''),
  });

  constructor(private registerService:RegisterService,private toast:NgToastService,private router:Router,private exceptionService:ExceptionService){}

  public onSubmit() {
    console.log(this.applyForm.value);
    this.registerService.register(this.applyForm.value.login!!,this.applyForm.value.password!!,this.applyForm.value.cpf!!).then((response)=>{
      this.toast.success({detail:"OK",summary:'Registro efetuado com sucesso',sticky:false, position:'topRight'});
      this.router.navigate(['/login']);
    }).catch((error)=>{
      this.toast.error({detail:"ERRO",summary:'Falha ao executar registro',sticky:false, position:'topRight'});
      this.exceptionService.postException(error.stack,"RegisterFormComponent","register");
    });
  }


}
