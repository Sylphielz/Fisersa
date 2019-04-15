import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaresPage } from './fares.page';

describe('FaresPage', () => {
  let component: FaresPage;
  let fixture: ComponentFixture<FaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
