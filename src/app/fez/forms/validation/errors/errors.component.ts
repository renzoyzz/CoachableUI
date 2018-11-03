import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy
} from "@angular/core";
import { FezErrorComponent } from "../error/error.component";
import { Subscription } from "rxjs";

@Component({
  selector: "fez-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.css"]
})
export class FezErrorsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(FezErrorComponent)
  private _errors: QueryList<FezErrorComponent>;
  private _errorSubscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    this._errors.forEach((errorComponent, index) => {
      errorComponent.isActive = false;
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
