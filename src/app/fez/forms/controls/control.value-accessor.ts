import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, ForwardRefFn } from '@angular/core';

export class ControlValueAccessorHelper {
  static create(component: any) {
    console.log(component);
    return {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => component),
      multi: true
    };
  }
}
