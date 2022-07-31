import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTripComponent } from './end-trip.component';

describe('EndTripComponent', () => {
  let component: EndTripComponent;
  let fixture: ComponentFixture<EndTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
