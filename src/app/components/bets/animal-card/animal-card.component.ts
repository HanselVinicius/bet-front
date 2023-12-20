import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/model/animal/Animal';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BetDialogComponent } from '../../utils/bet-dialog/bet-dialog.component';
import { BetService } from 'src/app/services/bet/bet.service';
import { NgToastService } from 'ng-angular-popup';
import { ExceptionService } from 'src/app/services/exceptions/exception.service';
@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
})
export class AnimalCardComponent {
  
    constructor(public dialog:MatDialog,private betService:BetService,private toast:NgToastService,private exceptionService:ExceptionService){}

    @Input() animal:Animal = {
      id:0,
      nome:"",
      lastDayDrawed:new Date()
    };


    public openBetDialog(){
    this.dialog.open(BetDialogComponent,{}).afterClosed().subscribe(result => {
        if(result){
        this.betService.betInAnimal(this.animal.nome).then((response)=>{
          this.toast.success({detail:"SUCESS",summary:'JOGADO NO ' +this.animal.nome +' COM SUCESSO ' ,sticky:false, position:'topRight'});
        }).catch((error)=>{
          this.toast.error({detail:"ERRO",summary:'Falha ao executar Aposta',sticky:false, position:'topRight'});
        });
      }
     });
    }

}
