import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoadComponentComponent } from './dynamic-load-component.component';

describe('DynamicLoadComponentComponent', () => {
  let component: DynamicLoadComponentComponent;
  let fixture: ComponentFixture<DynamicLoadComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicLoadComponentComponent]
    });
    fixture = TestBed.createComponent(DynamicLoadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
