import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSignComponent } from './register-sign.component';

describe('RegisterSignComponent', () => {
  let component: RegisterSignComponent;
  let fixture: ComponentFixture<RegisterSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
