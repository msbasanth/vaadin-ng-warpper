import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaadinCheckboxComponent } from './vaddin-checkbox-component';

describe('VaddinComponetComponent', () => {
  let component: VaadinCheckboxComponent;
  let fixture: ComponentFixture<VaadinCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaadinCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaadinCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
