import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-add-event-admin',
  templateUrl: './add-event-admin.component.html',
  styleUrls: ['./add-event-admin.component.scss']
})
export class AddEventAdminComponent implements OnInit {

 
  event: Event = new Event();
 validationForm: UntypedFormGroup;
  isFormSubmitted: boolean;
  successMessage: string;
  countdown: number;
  isFormValid: boolean;
  

  constructor(
    private router: Router,
    private EventService: EventService,
    public formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {

    this.validationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      lieu: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      typeEvent: ['', Validators.required],
      themeEvent: ['', Validators.required]

   
    });

    
  }

  get form() {
    return this.validationForm.controls;
  }





  AddEvent() {
    this.isFormSubmitted = true;
 
  
      if (this.validationForm.valid)  {
        this.isFormValid = true;

        this.EventService.addEvent(this.event).subscribe((response) => {
       
            this.successMessage = 'ajout reussite !';
            this.countdown = 5;
            const intervalId = setInterval(() => {
              this.countdown--;
              if (this.countdown === 0) {
                clearInterval(intervalId);
                this.router.navigate(['compte/admin/evenements']);
              }
            }, 1000);
      
          this.isFormSubmitted = false;
        });
      }
   
  }


}
