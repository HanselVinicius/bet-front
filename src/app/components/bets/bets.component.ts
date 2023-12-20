import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal/Animal';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { ExceptionService } from 'src/app/services/exceptions/exception.service';
import { NgToastService } from 'ng-angular-popup';
import { SharedRegistrationService } from 'src/app/services/shared_services/SharedRegistrationService';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {

  constructor(private animalService: AnimalService,private exceptionService:ExceptionService,private toast:NgToastService,private sharedRegistration:SharedRegistrationService) { }
  public currentPage:number = 0;
  public pageSize:number = 20;
  public animalList:Set<Animal> = new Set<Animal>();
  public totalPages:any;
  ngOnInit(): void {
    this.sharedRegistration.animalRegistered$.subscribe(() => {
      this.populeList(this.currentPage, this.pageSize);
    });
    this.populeList(this.currentPage,this.pageSize);
  }

  public populeList(page: number,pageSize:number) {
    this.animalService.getAnimals(page,pageSize).then((response)=>{
      this.animalList = response.data.content;
      this.totalPages = Array(response.data.totalPages).fill(0).map((x,i)=>i);
    }).catch((error)=>{
      this.toast.error({detail:"ERRO",summary:'Falha ao exibir dados',sticky:false, position:'topRight'});
    });
  }
}


