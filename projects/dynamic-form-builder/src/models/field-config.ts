import { TemplateOptions } from "./template-options";

export interface FieldConfig {
  id?: string;
  key: string;
  type: string;
  defaultVaule?: any;
  templateOptions?: TemplateOptions
  isRequired?: boolean;
  formatter: () => string;
}
