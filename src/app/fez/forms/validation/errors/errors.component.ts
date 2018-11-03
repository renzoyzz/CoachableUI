import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy,
  Input,
  HostBinding
} from '@angular/core';
import { FezErrorComponent } from '../error/error.component';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fez-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class FezErrorsComponent implements OnInit, AfterContentInit, OnDestroy {
  @HostBinding('class.showing')
  public get isShowing(): boolean {
    let result: boolean;
    if (!this._control) {
      result = true;
    } else {
      result = !(
        this._control.invalid &&
        (this._control.dirty || this._control.touched)
      );
    }

    console.log(`isShowing: ${result}`);
    return result;
  }

  @ContentChildren(FezErrorComponent)
  private _errors: QueryList<FezErrorComponent>;
  private _errorSubscriptions: Subscription[] = [];
  private _control: FormControl;

  @Input('control')
  set isActive(control: FormControl) {
    this._control = control;
  }

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this._errors.forEach((errorComponent, index) => {
      this._errorSubscriptions.push(
        errorComponent.activeObservable.subscribe(() => {
          this.forceOneErrorToShow();
        })
      );
    });
    this.forceOneErrorToShow();
  }

  ngOnDestroy() {
    this._errorSubscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  public forceOneErrorToShow() {
    let indexError = this._errors.length;
    this._errors.forEach((errorComp, index) => {
      if (errorComp.isActive && indexError > index) {
        indexError = index;
        errorComp.activeOverride = false;
      } else {
        errorComp.activeOverride = true;
      }
    });

    this._errors.forEach(errComp => {
      errComp.updateIsShowing();
    });
  }
}
