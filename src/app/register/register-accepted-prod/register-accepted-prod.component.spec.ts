import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAcceptedProdComponent } from './register-accepted-prod.component';

describe('RegisterAcceptedProdComponent', () => {
  let component: RegisterAcceptedProdComponent;
  let fixture: ComponentFixture<RegisterAcceptedProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAcceptedProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAcceptedProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
