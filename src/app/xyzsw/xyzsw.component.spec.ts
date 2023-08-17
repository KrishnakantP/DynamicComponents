import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XYZSWComponent } from './xyzsw.component';

describe('XYZSWComponent', () => {
  let component: XYZSWComponent;
  let fixture: ComponentFixture<XYZSWComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XYZSWComponent]
    });
    fixture = TestBed.createComponent(XYZSWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
