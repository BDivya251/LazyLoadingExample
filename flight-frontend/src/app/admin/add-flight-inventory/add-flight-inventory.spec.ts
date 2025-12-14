import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightInventory } from './add-flight-inventory';

describe('AddFlightInventory', () => {
  let component: AddFlightInventory;
  let fixture: ComponentFixture<AddFlightInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFlightInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightInventory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
