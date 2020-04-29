import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNewsAddComponent } from './manager-news-add.component';

describe('ManagerNewsAddComponent', () => {
  let component: ManagerNewsAddComponent;
  let fixture: ComponentFixture<ManagerNewsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNewsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerNewsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
