import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaddinComponetComponent } from './vaddin-componet.component';

describe('VaddinComponetComponent', () => {
  let component: VaddinComponetComponent;
  let fixture: ComponentFixture<VaddinComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaddinComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaddinComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
