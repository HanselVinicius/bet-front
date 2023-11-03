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
  public currentPage:number = 0;
  public pageSize:number = 20;
  public animalList:Set<Animal> = new Set<Animal>();

  ngOnInit(): void {
    this.populeList(this.currentPage,this.pageSize);
  }

  public populeList(page: number,pageSize:number) {
    this.animalService.getAnimals(JSON.parse(this.cookieService.get("USER")).token,page,pageSize).then((response)=>{
      this.animalList = response.data.content;
      
    })
  }
}


