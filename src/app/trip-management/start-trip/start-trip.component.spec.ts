import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTripComponent } from './start-trip.component';

describe('StartTripComponent', () => {
  let component: StartTripComponent;
  let fixture: ComponentFixture<StartTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
