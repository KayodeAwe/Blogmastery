import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopmpageIconsComponent } from './hopmpage-icons.component';

describe('HopmpageIconsComponent', () => {
  let component: HopmpageIconsComponent;
  let fixture: ComponentFixture<HopmpageIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HopmpageIconsComponent]
    });
    fixture = TestBed.createComponent(HopmpageIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
