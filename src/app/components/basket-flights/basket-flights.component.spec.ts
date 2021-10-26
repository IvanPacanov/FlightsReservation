import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketFlightsComponent } from './basket-flights.component';

describe('BasketFlightsComponent', () => {
  let component: BasketFlightsComponent;
  let fixture: ComponentFixture<BasketFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
