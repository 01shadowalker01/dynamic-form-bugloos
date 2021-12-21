import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import {
  DynamicFormBuilderModule,
  FormManagerModule,
} from "projects/dynamic-form-builder";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentListComponent } from "./components/component-list/component-list.component";
import { AppRoutingModule } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { GetStartedComponent } from "./components/get-started/get-started.component";
import { FieldCrudExampleComponent } from "./form-management/field-crud-example/field-crud-example.component";
import { NewFieldDialogComponent } from "./form-management/new-field-dialog/new-field-dialog.component";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    GetStartedComponent,
    FieldCrudExampleComponent,
    NewFieldDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,

    DynamicFormBuilderModule,
    FormManagerModule,
  ],
  providers: [
    MatDialog,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
