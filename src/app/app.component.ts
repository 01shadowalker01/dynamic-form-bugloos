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
      },
      {
        key: "textarea",
        type: "textarea",
      },
    ],
  };
}
