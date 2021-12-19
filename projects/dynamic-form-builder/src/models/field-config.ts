import { KeyValue } from "@angular/common";
import { FormControl } from "@angular/forms";
import { TemplateOptions } from "./template-options";

export interface FieldConfig {
  id?: string;
  key: string;
  type: string;
  defaultVaule?: any;
  templateOptions?: TemplateOptions;
  isRequired?: boolean;
  formControl?: FormControl;
  formatter?: () => string;
  options?: KeyValue<string | number, any>[];
}
