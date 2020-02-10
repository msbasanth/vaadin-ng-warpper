import { Component, NgZone, Input, Output } from '@angular/core';
import {SHButton} from '@vaadin/sh-button/src/sh-button.js'
import { ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { ProxyCmp, proxyOutputs } from '../proxy-utils';
@ProxyCmp({inputs: ['icon', 'label', 'shape', 'color', 'tooltip', 'disabled','role','href']})
@Component({
  selector: 'sh-button',
   template: '<ng-content></ng-content>',
   inputs: ['icon', 'label', 'shape', 'color', 'tooltip', 'disabled','role','href']
    })
export class SHUIButtonComponent  {

   protected el: HTMLElement;
   
   click!: EventEmitter<CustomEvent>;
   focus!: EventEmitter<CustomEvent>;
   blur!: EventEmitter<CustomEvent>;
   /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
  

  constructor(c: ChangeDetectorRef, r: ElementRef,protected z:NgZone) {
    this.el = new SHButton();
    
    r.nativeElement.setAttribute("label", "XX");
    this.el =  r.nativeElement;
   c.detach();
   proxyOutputs(this, this.el, ['click', 'focus', 'blur']);
 
   }

}

