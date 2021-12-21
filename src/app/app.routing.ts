import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentListComponent } from "./components/component-list/component-list.component";
import { GetStartedComponent } from "./components/get-started/get-started.component";
import { FieldCrudExampleComponent } from "./form-management/field-crud-example/field-crud-example.component";

const routes: Routes = [
  { path: "get-started", component: GetStartedComponent },
  { path: "components", component: ComponentListComponent },
  { path: "field-crud", component: FieldCrudExampleComponent },
  { path: "**", pathMatch: "full", redirectTo: "get-started" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
