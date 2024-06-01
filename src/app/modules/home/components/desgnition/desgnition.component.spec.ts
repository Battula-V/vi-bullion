import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgnitionComponent } from './desgnition.component';

describe('DesgnitionComponent', () => {
  let component: DesgnitionComponent;
  let fixture: ComponentFixture<DesgnitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesgnitionComponent]
    });
    fixture = TestBed.createComponent(DesgnitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
