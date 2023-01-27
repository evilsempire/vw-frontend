import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formControl') formControl: FormControl;
  @Input() selectLabel: string;
  @Input() selectPlaceholder: string = "";
  @Input() showClearIcon: boolean = false;
  @Input() options: any = [];
  constructor() { }

}
