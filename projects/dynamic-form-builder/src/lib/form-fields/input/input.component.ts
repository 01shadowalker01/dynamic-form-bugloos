import { Component, OnInit } from "@angular/core";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
