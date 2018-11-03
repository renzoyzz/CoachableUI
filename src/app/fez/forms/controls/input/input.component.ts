import { Component } from '@angular/core';
import { FezFormControlComponent } from '../control.component';
import { ControlValueAccessorHelper } from '../control.value-accessor';

@Component({
  selector: 'fez-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [ControlValueAccessorHelper.create(FezInputComponent)]
})
export class FezInputComponent extends FezFormControlComponent<string> {}
