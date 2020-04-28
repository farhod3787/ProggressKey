import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWarehouseComponent } from './register-warehouse.component';

describe('RegisterWarehouseComponent', () => {
  let component: RegisterWarehouseComponent;
  let fixture: ComponentFixture<RegisterWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
