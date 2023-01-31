import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, Observable, of, startWith } from 'rxjs';
import { FormControlValueAccessorConnector } from './form-control-value-accessor-connector.component';

interface ControlValueAccessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  setDisabledState(isDisabled: boolean): void
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ]
})
export class SelectComponent extends FormControlValueAccessorConnector implements OnInit, OnChanges  {
  @Input() placeholder: string = "Specify placeholder='you placeholder here'";
  @Input() items: Array<any> | Observable<Array<any>> = [];

  @Input() bindValueKey: string = "value";
  @Input() bindLabelKey: string = "label";
  @Input() searchPlaceholder: string = "Search your item ...";
  @Input() showClearIcon: boolean = false;
  @Output() itemFilterServerSide = new EventEmitter<string>();
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formControl') formControl: FormControl;
  filterFormControl: FormControl = new FormControl('')


  @Input() isServerSide: boolean = true;
  private currentStaticItems: Array<any> = [];

  constructor(injector: Injector) {
    //@ts-ignore
    super(injector);
  }

  private listenToFilterFormControlChanges(): void {
    this.filterFormControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
    ).subscribe((value: string) => {
      console.log(value);
      console.log(this.isServerSide);
      if (this.isServerSide) {
        this.itemFilterServerSide.emit(value);
      } else {
        this.filterStaticList(value);
      }
    });
  }

  private filterStaticList(value: string) {
    const currentItems = this.currentStaticItems;

    const filterValue = this._normalizeValue(value);
    this.items = of(
      currentItems.filter(item => this._normalizeValue(item).includes(filterValue))
    );
  }

  private _normalizeValue(value: any): string {
    if (typeof value != "string") {
      value = value[this.bindLabelKey];
    }
    return value.toLowerCase().replace(/\s/g, '');
  }

  ngOnInit(): void {
    this.listenToFilterFormControlChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.items instanceof Array) {
      this.currentStaticItems = this.items;
      this.items = of(this.items);
      // this.isServerSide = true;
    }
  }
}
