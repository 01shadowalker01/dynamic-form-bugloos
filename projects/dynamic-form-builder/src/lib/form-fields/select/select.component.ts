import { Component, OnInit } from "@angular/core";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
