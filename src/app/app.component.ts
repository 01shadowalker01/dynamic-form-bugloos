import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  navList = [
    { route: "/get-started", title: "Get Started" },
    { route: "/components", title: "Components" },
  ];
}
