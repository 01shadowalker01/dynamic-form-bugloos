import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

import { DynamicFormBuilderComponent } from "./dynamic-form-builder.component";
import { InputComponent } from "./form-fields/input/input.component";
import { TextAreaComponent } from "./form-fields/text-area/text-area.component";
import { DatePickerComponent } from "./form-fields/date-picker/date-picker.component";
import { DateRangeComponent } from "./form-fields/date-range/date-range.component";
import { SelectComponent } from "./form-fields/select/select.component";

@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    InputComponent,
    TextAreaComponent,
    DatePickerComponent,
    DateRangeComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [DynamicFormBuilderComponent],
})
export class DynamicFormBuilderModule {}
