import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsmediaComponent } from './personsmedia.component';

describe('PersonsmediaComponent', () => {
  let component: PersonsmediaComponent;
  let fixture: ComponentFixture<PersonsmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
