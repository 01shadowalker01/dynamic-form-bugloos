import { Component, OnInit } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormField } from "../../../models/form-field";

@Component({
  selector: "lib-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent extends FormField  {
  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.initField();
  }

  initField() {
    this.value = this.config.defaultVaule || [];
  }

  onValueChange({ checked, key }: any) {
    if (!Array.isArray(this.value))
      throw new Error("Check box value should be an array");

    if (checked) this.value.push(key);
    else {
      const index = this.value.findIndex(item => item === key);
      this.value.splice(index, 1);
    }
    this._onChange(this.value);
    this._onTouched();
  }
}
