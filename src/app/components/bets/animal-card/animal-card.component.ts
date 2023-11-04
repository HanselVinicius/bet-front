import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/model/animal/Animal';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BetDialogComponent } from '../../utils/bet-dialog/bet-dialog.component';
@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
})
export class AnimalCardComponent {
  
    constructor(public dialog:MatDialog){}

    @Input() animal:Animal = {
      id:0,
      nome:"",
      lastDayDrawed:new Date()
    };


    public openBetDialog(){
     let dialogRef = this.dialog.open(BetDialogComponent,{}).afterClosed().subscribe(result => {
        //service call to bet in an animal
     });
    }

}
