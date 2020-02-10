import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SHUIButtonComponent } from './shuibutton-componet.component';

describe('SHUIButtonComponetComponent', () => {
  let component: SHUIButtonComponent;
  let fixture: ComponentFixture<SHUIButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SHUIButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SHUIButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
