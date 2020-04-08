import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedProductsComponent } from './requested-products.component';

describe('RequestedProductsComponent', () => {
  let component: RequestedProductsComponent;
  let fixture: ComponentFixture<RequestedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
