import { Component } from '@angular/core';
import { Animal } from 'src/app/model/animal/Animal';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent {
  // mock data remove when make the service 
  public animalList:Animal[] = [
    {
      id:1,
      nome:"Cachorro",
      lastDayDrawed:new Date()
    },
    {
      id:2,
      nome:"Macaco",
      lastDayDrawed:new Date()
    },
    {
      id:3,
      nome:"Gato",
      lastDayDrawed:new Date()
    },
  ]




}
