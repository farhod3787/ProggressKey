import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratorAddComponent } from './registrator-add.component';

describe('RegistratorAddComponent', () => {
  let component: RegistratorAddComponent;
  let fixture: ComponentFixture<RegistratorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
