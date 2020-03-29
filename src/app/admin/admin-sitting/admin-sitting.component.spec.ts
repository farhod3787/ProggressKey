import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSittingComponent } from './admin-sitting.component';

describe('AdminSittingComponent', () => {
  let component: AdminSittingComponent;
  let fixture: ComponentFixture<AdminSittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
