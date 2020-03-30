import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratorHomeComponent } from './registrator-home.component';

describe('RegistratorHomeComponent', () => {
  let component: RegistratorHomeComponent;
  let fixture: ComponentFixture<RegistratorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
