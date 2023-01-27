import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string;
  @Input() buttonIcon: string;
  @Input() buttonType: string = "mat-flat-button";
  @Input() disabledFlag: boolean = false;
  @Input() buttonColor: string = "#004666";

  constructor() { }

}
