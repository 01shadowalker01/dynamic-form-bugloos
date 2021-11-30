import { Component, OnInit } from "@angular/core";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-date-range",
  templateUrl: "./date-range.component.html",
  styleUrls: ["./date-range.component.scss"],
})
export class DateRangeComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
