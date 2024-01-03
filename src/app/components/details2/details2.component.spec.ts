import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details2Component } from './details2.component';

describe('Details2Component', () => {
  let component: Details2Component;
  let fixture: ComponentFixture<Details2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Details2Component]
    });
    fixture = TestBed.createComponent(Details2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
