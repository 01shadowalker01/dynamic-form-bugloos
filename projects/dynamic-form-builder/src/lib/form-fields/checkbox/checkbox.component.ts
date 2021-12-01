import { Component, OnInit } from '@angular/core';
import { FormField } from "../../../models/form-field";

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends FormField implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
