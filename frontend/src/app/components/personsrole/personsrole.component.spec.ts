import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsroleComponent } from './personsrole.component';

describe('PersonsroleComponent', () => {
  let component: PersonsroleComponent;
  let fixture: ComponentFixture<PersonsroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
