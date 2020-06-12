import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSignComponent } from './manager-sign.component';

describe('ManagerSignComponent', () => {
  let component: ManagerSignComponent;
  let fixture: ComponentFixture<ManagerSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
