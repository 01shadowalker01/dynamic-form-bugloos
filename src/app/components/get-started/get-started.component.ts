import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from 'projects/dynamic-form-builder';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  form = new FormGroup({});
  model = {}

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
          hint: "Hint goes here!",
        },
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
