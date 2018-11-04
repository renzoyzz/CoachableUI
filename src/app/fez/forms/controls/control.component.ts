import {
  Input,
  ContentChild,
  Optional,
  Host,
  SkipSelf,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  ControlValueAccessor,
  ControlContainer,
  AbstractControl
} from '@angular/forms';
import { FezErrorsComponent } from '../validation/errors/errors.component';

export class FezFormControlComponent<T>
  implements ControlValueAccessor, OnInit, AfterViewInit {
  private _val: T;
  private _onChange: Function;
  protected onTouched: Function;
  protected _isDisabled: boolean;
  private _isInitialized = false;
  @Input()
  public placeholder: string;
  @Input()
  public id: string;
  @Input()
  public name: string;
  @Input()
  public errors: string[];

  @ContentChild(FezErrorsComponent)
  errorsComponent: FezErrorsComponent;

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.errorsComponent) {
      this.errorsComponent.parentControl = this;
    }
  }

  public get formControl(): AbstractControl {
    return this.controlContainer.control.get(this.name);
  }

  public get val(): T {
    return this._val;
  }

  public set val(val: T) {
    this._val = val;
    this._onChange(this._val);
    this.onTouched();
  }

  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  public writeValue(val: T): void {
    if (!this._isInitialized) {
      this._isInitialized = true;
      return;
    }
    if (val) {
      this._val = val;
    }
  }
  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
