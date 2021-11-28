import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormBuilderComponent } from "./dynamic-form-builder.component";
import { InputComponent } from "./form-fields/input/input.component";
import { TextAreaComponent } from "./form-fields/text-area/text-area.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    InputComponent,
    TextAreaComponent,
  ],
  imports: [CommonModule, MatInputModule],
  exports: [DynamicFormBuilderComponent],
})
export class DynamicFormBuilderModule {}
