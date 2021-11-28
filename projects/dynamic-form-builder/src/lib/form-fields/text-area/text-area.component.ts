import { Component, OnInit } from "@angular/core";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"],
})
export class TextAreaComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
