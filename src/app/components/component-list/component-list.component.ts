import { Component, OnInit } from '@angular/core';
import { FormConfig } from 'projects/dynamic-form-builder';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {
  formConfig: FormConfig = {
    fields: [
      {
        key: "input",
        type: "input",
        templateOptions: {
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
        }
      },
      {
        key: "number",
        type: "input",
        templateOptions: {
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
          label: "label",
          placeholder: "placeholder",
          hint: "Hey!",
          rows: 3,
          cols: 20
        }
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
