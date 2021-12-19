import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormManagerComponent } from "./component/form-manager.component";

@NgModule({
  declarations: [FormManagerComponent],
  imports: [CommonModule],
  exports: [FormManagerComponent],
})
export class FormManagerModule {}
