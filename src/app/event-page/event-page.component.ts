import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DossierSponsoring} from "../models/sponsoring";
import {SponsoringService} from "../services/sponsoring.service";
import {User} from "../models/user";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {
  eventId: number;
  event:Event;

  dossier: DossierSponsoring;
  constructor(private route: ActivatedRoute,
              private EventService:EventService,
              private router: Router,
              private modalService: NgbModal,
              private sponsoringService: SponsoringService,
                 ) {
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
    this.sponsoringService.findByEventId(this.eventId).subscribe(e =>  this.dossier = e );
  }
  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' });
  }

  public isBasicExampleMenuCollapsed = true;


  closeAndOpenModal(modal2: any) {
    this.modalService.dismissAll();
    this.modalService.open(modal2, {size: 'lg'})
  }


  create(value: any) {
    let userId = localStorage.getItem("userId");
    let user = new User();
    user.id = Number(userId);
    value.user = user;
    this.sponsoringService.creationDossierSponsoring(value).subscribe(e => console.log(e));
  }
}
