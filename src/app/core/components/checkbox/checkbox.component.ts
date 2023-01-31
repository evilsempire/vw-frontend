import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  indeterminate = false;
  @Input() disabled: boolean = false;

  @Input() label: String
  @Input() checked: boolean = false;

  constructor() { }

}
