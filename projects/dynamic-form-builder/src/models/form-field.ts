import { Directive, Input } from "@angular/core";
import { TemplateOptions } from "projects/dynamic-form-builder";
import { FieldConfig } from "./field-config";

@Directive()
export class FormField {
  @Input() config!: FieldConfig;

  public get to(): TemplateOptions {
    return this.config.templateOptions || {};
  }
}
