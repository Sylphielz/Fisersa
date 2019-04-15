import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoplinesPage } from './stoplines.page';

describe('StoplinesPage', () => {
  let component: StoplinesPage;
  let fixture: ComponentFixture<StoplinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoplinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoplinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
