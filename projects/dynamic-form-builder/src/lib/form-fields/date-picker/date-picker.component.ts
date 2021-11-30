import { Component, OnInit } from "@angular/core";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
