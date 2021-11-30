import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { VALID_FIELDS } from "../configs/valid-fields";
import { FormConfig } from "../models/form-config";

@Component({
  selector: "lib-dynamic-form-builder",
  templateUrl: "./dynamic-form-builder.component.html",
  styleUrls: ["./dynamic-form-builder.component.scss"],
})
export class DynamicFormBuilderComponent implements OnInit, OnChanges {
  @Input() formConfig!: FormConfig;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["formConfig"]) {
      this.checkConfigForValidation(this.formConfig);
    }
  }

  checkConfigForValidation(config: FormConfig) {
    if (config.fields) {
      config.fields.forEach(field => {
        if (VALID_FIELDS.indexOf(field.type) == -1) {
          throw new Error(`Field type '${field.type}' is not a valid type'`);
        }
      });
    }
  }
}
