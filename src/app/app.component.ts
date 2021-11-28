import { Component } from "@angular/core";
import { FormConfig } from "projects/dynamic-form-builder";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "dynamic-form-bugloos";
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
}
