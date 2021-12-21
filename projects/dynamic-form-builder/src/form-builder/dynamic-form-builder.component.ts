import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
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

  @ViewChildren("field") private _fieldListRef!: QueryList<ElementRef>;
  @ViewChild("fieldsWrapper")
  private _fieldsWrapperRef!: ElementRef<HTMLElement>;

  public get fieldListRef(): QueryList<ElementRef> {
    return this._fieldListRef;
  }

  public get fieldsWrapperRef(): ElementRef<HTMLElement> {
    return this._fieldsWrapperRef;
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["formConfig"]) {
      this.checkConfigForValidation(this.formConfig);
      this.initFormControl(this.formConfig);
    }
  }

  initFormControl(config: FormConfig) {
    config.fields.forEach(field => {
      let validators: ValidatorFn[] = [];
      if (field.isRequired) validators.push(Validators.required);

      let fieldValue = field.defaultVaule || null;
      field.formControl =
        field.formControl || new FormControl(fieldValue, validators);
      this.form.addControl(field.key, field.formControl);
    });
  }

  checkConfigForValidation(config: FormConfig) {
    if (config.fields) {
      let fieldKeys: any = {};
      config.fields.forEach(field => {
        if (VALID_FIELDS.indexOf(field.type) == -1) {
          throw new Error(`Field type '${field.type}' is not a valid type'`);
        }
        if (!fieldKeys[field.key]) {
          fieldKeys[field.key] = "test";
        } else {
          throw new Error(
            `Field key '${field.key}' is repetetive! Keys should be unique.`,
          );
        }
      });
    }
  }
}
