import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProductAddComponent } from './manager-product-add.component';

describe('ManagerProductAddComponent', () => {
  let component: ManagerProductAddComponent;
  let fixture: ComponentFixture<ManagerProductAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProductAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProductAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
