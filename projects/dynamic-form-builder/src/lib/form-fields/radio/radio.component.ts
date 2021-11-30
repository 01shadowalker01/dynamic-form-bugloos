import { Component, OnInit } from "@angular/core";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"],
})
export class RadioComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
