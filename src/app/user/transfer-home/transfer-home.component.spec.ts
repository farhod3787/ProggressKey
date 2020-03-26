import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferHomeComponent } from './transfer-home.component';

describe('TransferHomeComponent', () => {
  let component: TransferHomeComponent;
  let fixture: ComponentFixture<TransferHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
