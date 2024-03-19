import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

const state = {
  message: "",
  marks: 100
}

@Injectable({
  providedIn: 'root'
})

export class InteractionService {
  private subject = new BehaviorSubject<any>(state);
  store$ = this.subject.asObservable();

  constructor() {}

  get value() {
    return this.subject.value;
  }

  getValueFromStore<T>(): Observable<T>{
    return this.store$;
  }

  set(name: string, value: any) {
    this.subject.next({
      ...this.value,
      [name]: value
    })
  }

}