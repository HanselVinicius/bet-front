import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedRegistrationService {
  private animalRegisteredSubject = new Subject<void>();

  animalRegistered$ = this.animalRegisteredSubject.asObservable();

  emitAnimalRegistered(): void {
    this.animalRegisteredSubject.next();
  }
}