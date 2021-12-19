import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentListComponent } from "./components/component-list/component-list.component";
import { GetStartedComponent } from "./components/get-started/get-started.component";

const routes: Routes = [
  { path: "components", component: ComponentListComponent },
  { path: "get-started", component: GetStartedComponent },
  { path: "**", pathMatch: "full", redirectTo: "get-started" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
