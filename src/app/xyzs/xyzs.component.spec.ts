import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XYZSComponent } from './xyzs.component';

describe('XYZSComponent', () => {
  let component: XYZSComponent;
  let fixture: ComponentFixture<XYZSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XYZSComponent]
    });
    fixture = TestBed.createComponent(XYZSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
