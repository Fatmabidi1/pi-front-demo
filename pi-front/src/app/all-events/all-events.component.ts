import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {


  events : Event[] ;
  constructor( public EventService:EventService) { }


  ngOnInit(): void {


    this.EventService.getAllEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
      }
    );
  }


}
