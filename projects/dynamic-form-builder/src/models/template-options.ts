export interface TemplateOptions {
  className?: string;
  label?: string;
  placeholder?: string;
  hint?: string;
  tabindex?: number;

  [additionalProperties: string]: any;
}
