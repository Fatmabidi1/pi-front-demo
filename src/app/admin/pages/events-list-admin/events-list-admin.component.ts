import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-list-admin',
  templateUrl: './events-list-admin.component.html',
  styleUrls: ['./events-list-admin.component.scss']
})
export class EventsListAdminComponent implements OnInit {
  events: Event[];
  dataTable: DataTable;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events.reverse() ;
      console.log(this.events);
      
      setTimeout(() => {
     
        this.dataTable = new DataTable('#EventsTable');
       
      }, 100);
    });
  }
}