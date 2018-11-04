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
import { FezFormControlComponent } from '../../controls/control.component';

@Component({
  selector: 'fez-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class FezErrorsComponent implements OnInit, AfterContentInit, OnDestroy {
  @HostBinding('class.showing')
  public get isShowing(): boolean {
    if (!this._parentControl) {
      return false;
    }
    const formControl = this._parentControl.formControl;
    if (!formControl) {
      return false;
    }
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  @ContentChildren(FezErrorComponent)
  private _errors: QueryList<FezErrorComponent>;
  private _errorSubscriptions: Subscription[] = [];
  private _parentControl: FezFormControlComponent<any>;

  public set parentControl(control: FezFormControlComponent<any>) {
    this._parentControl = control;
  }

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.registerChangeDetection();
    this.forceOneErrorToShow();
  }

  ngOnDestroy() {
    this._errorSubscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  private registerChangeDetection(): void {
    this._errors.forEach((errorComponent, index) => {
      this._errorSubscriptions.push(
        errorComponent.activeObservable.subscribe(() => {
          this.forceOneErrorToShow();
        })
      );
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
