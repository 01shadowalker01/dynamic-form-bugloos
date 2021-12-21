import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  navGroupList = [
    {
      title: "Form fields",
      navList: [
        { route: "/get-started", title: "Get Started" },
        { route: "/components", title: "Components" },
      ],
    },
    {
      title: "Form management",
      navList: [
        { route: "/field-crud", title: "Field CRUD" },
      ],
    },
  ];
}
