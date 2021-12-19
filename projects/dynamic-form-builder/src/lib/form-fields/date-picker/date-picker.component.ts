import { Component, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatePickerComponent,
      multi: true,
    },
  ],
})
export class DatePickerComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
