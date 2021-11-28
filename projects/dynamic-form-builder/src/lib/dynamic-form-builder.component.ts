import { Component, Input, OnInit } from "@angular/core";
import { FormConfig } from "../models/form-config";

@Component({
  selector: "lib-dynamic-form-builder",
  templateUrl: "./dynamic-form-builder.component.html",
  styles: [],
})
export class DynamicFormBuilderComponent implements OnInit {
  @Input() formConfig!: FormConfig;

  constructor() {}

  ngOnInit(): void {}
}
