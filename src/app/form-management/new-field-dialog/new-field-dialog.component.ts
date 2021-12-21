import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { FieldConfig, VALID_FIELDS } from "projects/dynamic-form-builder";

@Component({
  selector: "app-new-field-dialog",
  templateUrl: "./new-field-dialog.component.html",
  styleUrls: ["./new-field-dialog.component.scss"],
})
export class NewFieldDialogComponent implements OnInit {
  form!: FormGroup;
  fieldList = VALID_FIELDS;

  constructor(
    private dialogRef: MatDialogRef<FieldConfig>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      key: [null, Validators.required],
      type: [null, Validators.required],
      isRequired: [null],
      templateOptions: this.formBuilder.group({
        label: [null],
        className: [null],
        placeholder: [null],
        hint: [null],
      }),
    });
  }

  onSubmit() {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }
}
