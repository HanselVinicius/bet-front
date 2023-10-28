import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/model/animal/Animal';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  
    @Input() animal:Animal = {
      id:0,
      nome:"",
      lastDayDrawed:new Date()
    };
}
