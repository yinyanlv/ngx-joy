import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';

export interface Action {
  event: string;
  data: any;
}

@Injectable()
export class SubjectService {
  private subject: Subject<Action> = new Subject<any>();
  private subject$: Observable<Action> = this.subject.asObservable();
  private eventMap: Map<string, Array<(data: any) => any>> = new Map<string, Array<(data: any) => any>>();

  constructor() {
    this.subject$.subscribe((action: Action) => {
      this.handle(action);
    });
  }

  private handle(action: Action) {
    const callbacks = this.getCallbacks(action.event);

    callbacks.forEach((callback) => {
      callback(action.data);
    });
  }

  publish(event: string, data: any) {
    this.subject.next({
      event,
      data
    });
  }

  subscribe(event: string, callback): void {
    const callbacks =  this.getCallbacks(event);

    callbacks.push(callback);
    this.eventMap.set(event, callbacks);
  }

  unsubscribe(event: string): void {
    if (this.eventMap.has(event)) {
      this.eventMap.delete(event);
    }
  }

  private getCallbacks(event: string): Array<(data: any) => any> {
    const callbacks = this.eventMap.get(event);

    return callbacks ? callbacks : [];
  }

  destroy() {
    this.subject.complete();
  }
}
