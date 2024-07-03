import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsRatesComponent } from './coins-rates.component';

describe('CoinsRatesComponent', () => {
  let component: CoinsRatesComponent;
  let fixture: ComponentFixture<CoinsRatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinsRatesComponent]
    });
    fixture = TestBed.createComponent(CoinsRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
