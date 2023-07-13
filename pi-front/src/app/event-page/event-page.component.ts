import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  eventId: number;
  event:Event;
  constructor(private route: ActivatedRoute,
              private EventService:EventService, private router: Router) {

  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.eventId = parseInt(idParam);
      this.EventService.getEventById(this.eventId).subscribe(
        event => {
          if (event) {
            this.event = event;
          } else {
            this.router.navigate(['/']); // or display an error message
          }
        },
        error => {
          console.log(error);
          this.router.navigate(['/']); // or display an error message
        }
      );
    } else {
      this.router.navigate(['/']); // or display an error message
    }
  }

  public isBasicExampleMenuCollapsed = true;


}
