import { Directive, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { TemplateOptions } from "projects/dynamic-form-builder";
import { FieldConfig } from "./field-config";

@Directive()
export class FormField implements ControlValueAccessor {
  @Input() config!: FieldConfig;

  protected value: any;
  protected _onChange!: (value: any) => void;
  protected _onTouched!: () => void;

  public get to(): TemplateOptions {
    return this.config.templateOptions || {};
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  onValueChange(value: any) {
    this.value = value;
    this._onChange(value);
    this._onTouched();
  }
}
