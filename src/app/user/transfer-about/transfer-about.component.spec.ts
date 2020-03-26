import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAboutComponent } from './transfer-about.component';

describe('TransferAboutComponent', () => {
  let component: TransferAboutComponent;
  let fixture: ComponentFixture<TransferAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
