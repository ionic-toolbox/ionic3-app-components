import { Directive } from '@angular/core';

@Directive({
  selector: '[sample]' // Attribute selector
})
export class SampleDirective {

  constructor() {
    console.log('Hello SampleDirective Directive');
  }

}
