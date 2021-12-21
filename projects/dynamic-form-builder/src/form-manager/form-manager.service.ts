import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { FieldConfig } from "../models/field-config";

@Injectable({
  providedIn: "root",
})
export class FormManagerService {
  private deleteProcess$ = new BehaviorSubject<boolean>(false);
  private newField$ = new Subject<FieldConfig>();

  public get deleteProcess(): Observable<boolean> {
    return this.deleteProcess$.asObservable();
  }

  public get newField(): Observable<FieldConfig> {
    return this.newField$.asObservable();
  }

  startDeleteProcess() {
    if (!this.deleteProcess$.value) this.deleteProcess$.next(true);
  }

  finishDeleteProcess() {
    if (this.deleteProcess$.value) this.deleteProcess$.next(false);
  }

  addNewField(newField: FieldConfig) {
    this.newField$.next(newField);
  }
}
