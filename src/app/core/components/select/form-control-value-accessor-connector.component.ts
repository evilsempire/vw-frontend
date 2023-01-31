import {ControlContainer, ControlValueAccessor, FormControl, FormControlDirective} from '@angular/forms';
import {Component, Injector, Input, ViewChild} from '@angular/core';

@Component({
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export abstract class FormControlValueAccessorConnector implements ControlValueAccessor {

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective | undefined;

  @Input()
  formControl: FormControl | undefined;

  @Input()
  formControlName: string | undefined;

  protected constructor(private injector: Injector) {
  }


  /**
   *  Use this getter in FormControl on mat-select to make connection with provided formControl of Parent
   *
   *  this.formControl => When a formControl Obj is Provided from parent
   *  this.formControl => When name of a formControl in Parent Form is Provided
   *
   */
  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }


  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
