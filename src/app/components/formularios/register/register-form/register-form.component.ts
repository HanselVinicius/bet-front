import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],

})
export class RegisterFormComponent {
  public applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    cpf: new FormControl(''),
  });

  public onSubmit() {
    console.log(this.applyForm.value);
  }


}
