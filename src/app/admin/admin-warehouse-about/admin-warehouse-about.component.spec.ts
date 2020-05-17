import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWarehouseAboutComponent } from './admin-warehouse-about.component';

describe('AdminWarehouseAboutComponent', () => {
  let component: AdminWarehouseAboutComponent;
  let fixture: ComponentFixture<AdminWarehouseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWarehouseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWarehouseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
