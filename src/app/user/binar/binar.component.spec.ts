import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarComponent } from './binar.component';

describe('BinarComponent', () => {
  let component: BinarComponent;
  let fixture: ComponentFixture<BinarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
