import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSendProductComponent } from './register-send-product.component';

describe('RegisterSendProductComponent', () => {
  let component: RegisterSendProductComponent;
  let fixture: ComponentFixture<RegisterSendProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSendProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSendProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
