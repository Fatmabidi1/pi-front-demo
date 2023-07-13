import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/UserService';
import { User } from '../models/user';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events:Event[];

  @ViewChild('Events') EventsBloc: ElementRef;

  @ViewChild('Contact') Contact: ElementRef;

  scrollToEvents() {
    this.EventsBloc.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    this.Contact.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @ViewChild('Services') ServicesBloc: ElementRef;

  scrollToServices() {
    this.ServicesBloc.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  isScrolled = false;
  isLoggedIn = false;
  users : User[] ;
  constructor( public userService:UserService,public eventService:EventService) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );


    this.eventService.getAllEvents().subscribe(events => {
      this.events = events.reverse().slice(0, 9); // Reverse the order and limit to 6 records
      console.log(this.events);
    });

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = isLoggedIn === 'true';
    
  
  }
  public isBasicExampleMenuCollapsed = true;
  images = ['assets/images/cover3.jpg','assets/images/cover2.jpg','assets/images/cover1.jpg'];


}
