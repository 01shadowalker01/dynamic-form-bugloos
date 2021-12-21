import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FormManagerService {
  private deleteProcess$ = new BehaviorSubject<boolean>(false);

  public get deleteProcess(): Observable<unknown> {
    return this.deleteProcess$.asObservable();
  }

  startDeleteProcess() {
    if (!this.deleteProcess$.value) this.deleteProcess$.next(true);
  }

  finishDeleteProcess() {
    if (this.deleteProcess$.value) this.deleteProcess$.next(false);
  }
}
