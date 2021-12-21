import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { DynamicFormBuilderComponent } from "./dynamic-form-builder.component";
import { InputComponent } from "./form-fields/input/input.component";
import { TextAreaComponent } from "./form-fields/text-area/text-area.component";
import { DatePickerComponent } from "./form-fields/date-picker/date-picker.component";
import { DateRangeComponent } from "./form-fields/date-range/date-range.component";
import { SelectComponent } from "./form-fields/select/select.component";
import { RadioComponent } from './form-fields/radio/radio.component';
import { CheckboxComponent } from './form-fields/checkbox/checkbox.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    InputComponent,
    TextAreaComponent,
    DatePickerComponent,
    DateRangeComponent,
    SelectComponent,
    RadioComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  exports: [DynamicFormBuilderComponent],
})
export class DynamicFormBuilderModule {}
