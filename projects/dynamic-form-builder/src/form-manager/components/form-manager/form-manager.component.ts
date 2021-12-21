import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { of, Observable, Subject } from "rxjs";
import { mergeAll, takeUntil } from "rxjs/operators";

import { FieldConfig, FormConfig } from "projects/dynamic-form-builder";
import { DynamicFormBuilderComponent } from "projects/dynamic-form-builder";
import { FormManagerService } from "../../form-manager.service";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";

@Component({
  selector: "lib-form-manager",
  templateUrl: "./form-manager.component.html",
  styleUrls: ["./form-manager.component.scss"],
})
export class FormManagerComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Input() model: any;
  @Input() formConfig!: FormConfig;

  @Output() formSubmitted = new EventEmitter();

  @ViewChild("formBuilder")
  private formBuilderRef!: DynamicFormBuilderComponent;

  private deleteEvents$: Observable<ElementRef>[] = [];
  private deleteBtnRefList: { wrapper: ElementRef; btn: HTMLElement }[] = [];

  private unsubscribe$ = new Subject();

  constructor(
    private renderer: Renderer2,
    private injector: Injector,
    private appRef: ApplicationRef,
    public formManagerSrvc: FormManagerService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    this.listenToDeleteProcess();
    this.listenToNewFieldCreation();
  }

  listenToDeleteProcess() {
    this.formManagerSrvc.deleteProcess
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(startProcess => {
        if (startProcess) this.showDeleteBtns();
        else this.removeDeleteBtns();
      });
  }

  listenToNewFieldCreation() {
    this.formManagerSrvc.newField
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(this.addNewField.bind(this));
  }

  private showDeleteBtns() {
    this.formBuilderRef.fieldListRef.forEach(fieldWrapper => {
      this.renderer.setStyle(
        fieldWrapper.nativeElement,
        "position",
        "relative",
      );
      this.addDeleteBtnToField(fieldWrapper);
    });
    this.handleDeleteEvent();
  }

  private addDeleteBtnToField(fieldWrapper: ElementRef<HTMLElement>) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        DeleteButtonComponent,
      );

    const componentRef = componentFactory.create(this.injector);

    this.deleteEvents$.push(componentRef.instance.deleteClicked.asObservable());
    componentRef.instance.fieldRef = fieldWrapper;
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    this.renderer.appendChild(fieldWrapper.nativeElement, domElem);
    this.deleteBtnRefList.push({ wrapper: fieldWrapper, btn: domElem });
  }

  private removeDeleteBtns() {
    this.deleteBtnRefList.forEach(({ wrapper, btn }) => {
      this.renderer.removeChild(wrapper, btn);
    });
  }

  private handleDeleteEvent() {
    of(this.deleteEvents$)
      .pipe(mergeAll(), takeUntil(this.unsubscribe$))
      .subscribe(observable =>
        observable.pipe(takeUntil(this.unsubscribe$)).subscribe(fieldRef => {
          this.renderer.removeChild(
            this.formBuilderRef.fieldsWrapperRef.nativeElement,
            fieldRef.nativeElement,
          );
        }),
      );
  }

  private addNewField(newField: FieldConfig) {
    this.formConfig = {
      ...this.formConfig,
      fields: [...this.formConfig.fields, newField],
    };
  }

  finalizeDeleteProcess() {
    this.formManagerSrvc.finishDeleteProcess();
  }

  onSubmit() {
    this.formSubmitted.emit(this.form.value);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
