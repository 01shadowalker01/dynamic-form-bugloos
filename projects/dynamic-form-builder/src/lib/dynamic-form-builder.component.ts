import { Component, Input, OnInit } from '@angular/core';
import { FieldConfig } from '../models/field-config';
import { FormConfig } from '../models/form-config';

@Component({
  selector: 'lib-dynamic-form-builder',
  template: ` <p>dynamic-form-builder works!</p> `,
  styles: [],
})
export class DynamicFormBuilderComponent implements OnInit {
  @Input() formConfig!: FormConfig | FieldConfig[];

  constructor() {}

  ngOnInit(): void {}
}
