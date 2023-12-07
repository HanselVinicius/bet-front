import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-register-animal',
  templateUrl: './dialog-register-animal.component.html',
  styleUrls: ['./dialog-register-animal.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatDialogModule,FormsModule 
]

})
export class DialogRegisterAnimalComponent {
  public animalName:string = "";

  constructor(public dialogRef: MatDialogRef<DialogRegisterAnimalComponent>){}

  onConfirm(){
    this.dialogRef.close(this.animalName);
  }


}
