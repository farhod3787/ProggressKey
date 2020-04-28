import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClienthomeComponent } from './register-clienthome.component';

describe('RegisterClienthomeComponent', () => {
  let component: RegisterClienthomeComponent;
  let fixture: ComponentFixture<RegisterClienthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterClienthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClienthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
