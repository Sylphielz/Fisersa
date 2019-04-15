import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPage } from './stop.page';

describe('StopPage', () => {
  let component: StopPage;
  let fixture: ComponentFixture<StopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
