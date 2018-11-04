import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'fez-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class FezErrorComponent implements OnInit {
  @HostBinding('class.showing')
  private _isShowing: boolean;
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
    if (this._activeObserver) {
      this._activeObserver.next(this);
    }
  }

  private _activeOverride = false;
  set activeOverride(val: boolean) {
    this._activeOverride = val;
  }

  private _activeObserver: Observer<FezErrorComponent>;
  public activeObservable: Observable<FezErrorComponent>;

  constructor() {
    this.activeObservable = new Observable<FezErrorComponent>(
      observer => (this._activeObserver = observer)
    ).pipe(share());
  }

  ngOnInit() {}

  public updateIsShowing() {
    this._isShowing = !this._activeOverride && this._isActive;
  }
}
