import { Component, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioComponent,
      multi: true,
    },
  ],
})
export class RadioComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
