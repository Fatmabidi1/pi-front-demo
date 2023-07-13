import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:9090/evenement/getAll');
}


getEventsLength(): Observable<number> {
  return this.http.get<Event[]>('http://localhost:9090/evenement/getAll').pipe(
    map(Events => Events.length)
  );
}

getEventById(id: number): Observable<Event> {
  return this.http.get<Event>('http://localhost:9090/evenement/'+id);
}


addEvent(event: Event): Observable<any> {
  return this.http.post<any>('http://localhost:9090/evenement/addEvent', event);
}

}
