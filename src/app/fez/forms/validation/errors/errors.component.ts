import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy,
  Input
} from '@angular/core';
import { FezErrorComponent } from '../error/error.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fez-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class FezErrorsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(FezErrorComponent)
  private _errors: QueryList<FezErrorComponent>;
  private _errorSubscriptions: Subscription[] = [];
  private _isActive = false;

  get isActive(): boolean {
    return this._isActive;
  }

  @Input('active')
  set isActive(val: boolean) {
    if (!val) {
      this._isActive = false;
    } else {
      this._isActive = true;
    }
  }

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this._errors.forEach((errorComponent, index) => {
      this._errorSubscriptions.push(
        errorComponent.activeObservable.subscribe(errorComponent => {
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
