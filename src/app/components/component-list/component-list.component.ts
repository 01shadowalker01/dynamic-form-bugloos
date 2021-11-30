import { Component, OnInit } from '@angular/core';
import { FormConfig } from 'projects/dynamic-form-builder';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {
  formConfig: FormConfig = {
    fieldGroupClassName: "flex-container",
    fields: [
      {
        key: "input",
        type: "input",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
        }
      },
      {
        key: "number",
        type: "input",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
          type: "number"
        }
      },
      {
        key: "textarea",
        type: "textarea",
        templateOptions: {
          className: "flex-90 padding-10",
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
          rows: 3,
          cols: 20
        }
      },
      {
        key: "date-picker",
        type: "date-picker",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
        }
      },
      {
        key: "date-range",
        type: "date-range",
        templateOptions: {
          className: "flex-45 padding-10",
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
        }
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
