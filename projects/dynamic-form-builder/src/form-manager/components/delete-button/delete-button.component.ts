import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "lib-delete-button",
  templateUrl: "./delete-button.component.html",
  styleUrls: ["./delete-button.component.scss"],
})
export class DeleteButtonComponent implements OnInit {
  @Input() fieldRef!: ElementRef;
  @Output() deleteClicked = new EventEmitter<ElementRef>();

  constructor() {}

  ngOnInit(): void {}
}
