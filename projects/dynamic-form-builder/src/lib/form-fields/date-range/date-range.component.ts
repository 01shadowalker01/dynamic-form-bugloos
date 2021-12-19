import { Component, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-date-range",
  templateUrl: "./date-range.component.html",
  styleUrls: ["./date-range.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateRangeComponent,
      multi: true,
    },
  ],
})
export class DateRangeComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
