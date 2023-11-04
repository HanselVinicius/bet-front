import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetDialogComponent } from './bet-dialog.component';

describe('BetDialogComponent', () => {
  let component: BetDialogComponent;
  let fixture: ComponentFixture<BetDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetDialogComponent]
    });
    fixture = TestBed.createComponent(BetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
