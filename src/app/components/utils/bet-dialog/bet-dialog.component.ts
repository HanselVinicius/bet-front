import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-bet-dialog',
  templateUrl: './bet-dialog.component.html',
  styleUrls: ['./bet-dialog.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class BetDialogComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<BetDialogComponent>){}

  ngOnInit(): void {
    
  }
  
  onConfirm(result:boolean){
    this.dialogRef.close(result);
  }
 
}
