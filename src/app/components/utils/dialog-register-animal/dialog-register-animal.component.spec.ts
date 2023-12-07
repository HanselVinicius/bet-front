import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterAnimalComponent } from './dialog-register-animal.component';

describe('DialogRegisterAnimalComponent', () => {
  let component: DialogRegisterAnimalComponent;
  let fixture: ComponentFixture<DialogRegisterAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRegisterAnimalComponent]
    });
    fixture = TestBed.createComponent(DialogRegisterAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
