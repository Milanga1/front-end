import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientRegistrationComponent } from './new-patient-registration.component';

describe('NewPatientRegistrationComponent', () => {
  let component: NewPatientRegistrationComponent;
  let fixture: ComponentFixture<NewPatientRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPatientRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
