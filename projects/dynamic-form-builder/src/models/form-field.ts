import { Directive, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { TemplateOptions } from "projects/dynamic-form-builder";
import { FieldConfig } from "./field-config";

@Directive()
export class FormField implements ControlValueAccessor {
  @Input() config!: FieldConfig;

  protected _value: any;
  protected _onChange!: (value: any) => void;
  protected _onTouched!: () => void;

  public get to(): TemplateOptions {
    return this.config.templateOptions || {};
  }

  public get value(): any {
    return this._value;
  }

  public set value(v: any) {
    this._value = v;
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
    if (this.value !== value) {
      this.value = value;
      this._onChange(value);
      this._onTouched();
    }
  }
}
