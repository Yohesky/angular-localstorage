import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPeopleComponent } from './birthday-people.component';

describe('BirthdayPeopleComponent', () => {
  let component: BirthdayPeopleComponent;
  let fixture: ComponentFixture<BirthdayPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
