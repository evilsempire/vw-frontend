import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent   {
  value = "testValue"
  console = console;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formControl') formControl: FormControl;
  @Input() inputType:
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week" = "text";

  @Input() appearance: "standard";

  @Input() label: string;

  @Input() minLength: number;

  @Input() maxLength: number;

  @Input() disabledFlag: boolean;

  @Input() placeholder: string = "";

  @Input() inputWidthPercentage: number;

  @Input() prefixIcon: string = "";

  constructor() {
    console.log(this.disabledFlag)
  }

  // ngOnInit() {}
}
