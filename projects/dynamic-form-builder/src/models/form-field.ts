import { Directive, Input } from '@angular/core';
import { FieldConfig } from './field-config';

@Directive()
export class FormField {
  @Input() config!: FieldConfig;
}
