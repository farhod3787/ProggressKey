import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippedProductsComponent } from './shipped-products.component';

describe('ShippedProductsComponent', () => {
  let component: ShippedProductsComponent;
  let fixture: ComponentFixture<ShippedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
