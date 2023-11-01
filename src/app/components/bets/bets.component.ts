import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Animal } from 'src/app/model/animal/Animal';
import { AnimalService } from 'src/app/services/animal/animal.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

constructor(private animalService: AnimalService,private cookieService:CookieService) { }


  ngOnInit(): void {
    this.populeList();
  }

  // mock data remove when make the service 
  public animalList:Animal[] = [
   
  ]

  private populeList() {
    this.animalService.getAnimals(JSON.parse(this.cookieService.get("USER")).token).then((response)=>{
      for(let animal of response.data.content){
        this.animalList.push(animal);
      }
    })
  }
}


