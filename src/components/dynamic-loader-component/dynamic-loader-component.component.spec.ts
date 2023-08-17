import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoaderComponentComponent } from './dynamic-loader-component.component';

describe('DynamicLoaderComponentComponent', () => {
  let component: DynamicLoaderComponentComponent;
  let fixture: ComponentFixture<DynamicLoaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicLoaderComponentComponent]
    });
    fixture = TestBed.createComponent(DynamicLoaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
