import { NgModule } from '@angular/core';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { InputComponent } from './form-fields/input/input.component';
import { TextAreaComponent } from './form-fields/text-area/text-area.component';



@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    InputComponent,
    TextAreaComponent
  ],
  imports: [
  ],
  exports: [
    DynamicFormBuilderComponent
  ]
})
export class DynamicFormBuilderModule { }
