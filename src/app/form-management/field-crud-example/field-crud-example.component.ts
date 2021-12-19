import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from 'projects/dynamic-form-builder';

@Component({
  selector: 'app-field-crud-example',
  templateUrl: './field-crud-example.component.html',
  styleUrls: ['./field-crud-example.component.scss']
})
export class FieldCrudExampleComponent implements OnInit {
  form = new FormGroup({});

  formConfig: FormConfig = {
    fieldGroupClassName: "flex-container",
    fields: [
      {
        key: "input",
        type: "input",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Text input",
          placeholder: "placeholder",
          hint: "Hey!",
        },
      },
      {
        key: "number",
        type: "input",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Number input",
          placeholder: "placeholder",
          hint: "Hey!",
          type: "number",
        },
      },
      {
        key: "textarea",
        type: "textarea",
        templateOptions: {
          className: "flex-90 padding-10",
          label: "Text area",
          placeholder: "placeholder",
          hint: "Hey!",
          rows: 3,
          cols: 20,
        },
      },
      {
        key: "date-picker",
        type: "date-picker",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Date Picker",
          placeholder: "placeholder",
          hint: "Hey!",
        },
      },
      {
        key: "date-range",
        type: "date-range",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Date Range",
          hint: "Hey!",
        },
      },
      {
        key: "select",
        type: "select",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Select item",
          placeholder: "placeholder",
          hint: "Hey!",
        },
        options: [
          { key: 1, value: "First" },
          { key: 2, value: "Second" },
          { key: 3, value: "Third" },
        ],
      },
      {
        key: "radio",
        type: "radio",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Radio group",
          hint: "Hey!",
        },
        options: [
          { key: 1, value: "First" },
          { key: 2, value: "Second" },
          { key: 3, value: "Third" },
        ],
      },
      {
        key: "checkbox",
        type: "checkbox",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "Checkbox group",
          hint: "Hey!",
        },
        options: [
          { key: 1, value: "First" },
          { key: 2, value: "Second" },
          { key: 3, value: "Third" },
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
