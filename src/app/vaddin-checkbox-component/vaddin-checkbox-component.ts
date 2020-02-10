import { Component, NgZone,  EventEmitter } from '@angular/core';
import { ChangeDetectorRef, ElementRef } from '@angular/core';
import '@vaadin/vaadin-checkbox/vaadin-checkbox.js'
import { ProxyCmp, proxyOutputs } from '../proxy-utils';


@ProxyCmp({inputs: ['active', 'disabled', 'focused', 'indeterminate', 'checked', 'empty']})
@Component({
  selector: 'vaadin-checkbox',
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'focused', 'indeterminate', 'checked', 'empty']
})
export class VaadinCheckboxComponent {
  change!: EventEmitter<CustomEvent>;
  checkedChanged!: EventEmitter<CustomEvent>;
  indeterminateChanged!: EventEmitter<CustomEvent>;
  
  protected el: HTMLElement;

  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;

    proxyOutputs(this, this.el, ['change', 'checkedChanged', 'indeterminateChanged']);
    this.change.subscribe(this.your_callback_function);
    this.checkedChanged.subscribe(this.your_callback_function);
  }

  private your_callback_function() {
    console.log("Callback XXXXXX");
  }
}