import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratorComponent } from './registrator.component';

describe('RegistratorComponent', () => {
  let component: RegistratorComponent;
  let fixture: ComponentFixture<RegistratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
