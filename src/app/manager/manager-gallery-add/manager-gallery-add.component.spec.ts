import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGalleryAddComponent } from './manager-gallery-add.component';

describe('ManagerGalleryAddComponent', () => {
  let component: ManagerGalleryAddComponent;
  let fixture: ComponentFixture<ManagerGalleryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerGalleryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerGalleryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
