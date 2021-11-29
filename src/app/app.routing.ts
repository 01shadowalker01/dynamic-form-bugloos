import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentListComponent } from "./components/component-list/component-list.component";

const routes: Routes = [
  { path: "components", component: ComponentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
