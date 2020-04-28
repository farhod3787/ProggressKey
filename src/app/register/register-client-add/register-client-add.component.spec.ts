import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientAddComponent } from './register-client-add.component';

describe('RegisterClientAddComponent', () => {
  let component: RegisterClientAddComponent;
  let fixture: ComponentFixture<RegisterClientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterClientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
