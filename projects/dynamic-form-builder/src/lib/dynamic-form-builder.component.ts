import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VALID_FIELDS } from "../configs/valid-fields";
import { FormConfig } from "../models/form-config";

@Component({
  selector: "lib-dynamic-form-builder",
  templateUrl: "./dynamic-form-builder.component.html",
  styleUrls: ["./dynamic-form-builder.component.scss"],
})
export class DynamicFormBuilderComponent implements OnInit, OnChanges {
  @Input() form!: FormGroup;
  @Input() model: any;
  @Input() formConfig!: FormConfig;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["formConfig"]) {
      this.checkConfigForValidation(this.formConfig);
    }
    if (changes["form"]) this.initFormControl(this.formConfig);
  }

  initFormControl(config: FormConfig) {
    let controls: { [key: string]: any[] } = {};
    config.fields.forEach(field => {
      let controlValue = [field.defaultVaule || null];
      if (field.isRequired) controlValue.push(Validators.required);

      controls[field.type] = controlValue;
    });
    this.form = this.formBuilder.group(controls);
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
