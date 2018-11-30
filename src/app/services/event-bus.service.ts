import { Injectable } from '@angular/core';
import { EventBusArgs } from './event-bus-args';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any): void {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string): Observable<any>{
    return this._messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }

}
