import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoxesComponent } from './add-boxes.component';

describe('AddBoxesComponent', () => {
  let component: AddBoxesComponent;
  let fixture: ComponentFixture<AddBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
