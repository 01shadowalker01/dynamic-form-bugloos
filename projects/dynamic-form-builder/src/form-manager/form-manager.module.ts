import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormManagerComponent } from "./components/form-manager/form-manager.component";
import { DynamicFormBuilderModule } from "../form-builder/dynamic-form-builder.module";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";

@NgModule({
  declarations: [FormManagerComponent, DeleteButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    DynamicFormBuilderModule,
  ],
  exports: [FormManagerComponent],
})
export class FormManagerModule {}
