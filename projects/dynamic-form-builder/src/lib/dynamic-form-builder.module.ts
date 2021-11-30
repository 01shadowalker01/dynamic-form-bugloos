import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DynamicFormBuilderComponent } from "./dynamic-form-builder.component";
import { InputComponent } from "./form-fields/input/input.component";
import { TextAreaComponent } from "./form-fields/text-area/text-area.component";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DatePickerComponent } from "./form-fields/date-picker/date-picker.component";
import { DateRangeComponent } from "./form-fields/date-range/date-range.component";
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    InputComponent,
    TextAreaComponent,
    DatePickerComponent,
    DateRangeComponent,
  ],
  imports: [CommonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  exports: [DynamicFormBuilderComponent],
})
export class DynamicFormBuilderModule {}
