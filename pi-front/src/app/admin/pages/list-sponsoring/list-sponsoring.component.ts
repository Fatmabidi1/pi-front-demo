import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { DossierSponsoring } from 'src/app/models/sponsoring';
import { SponsoringService } from 'src/app/services/sponsoring.service';

@Component({
  selector: 'app-list-sponsoring',
  templateUrl: './list-sponsoring.component.html',
  styleUrls: ['./list-sponsoring.component.scss']
})
export class ListSponsoringComponent implements OnInit {

  DossierSponsorings: DossierSponsoring[] ;
  dataTable: DataTable;

  constructor(public sponsoringService:SponsoringService) { }

  ngOnInit(): void {
    this.sponsoringService.getAllDossierSponsoring().subscribe(
      (DossierSponsorings: DossierSponsoring[]) => {
        this.DossierSponsorings = DossierSponsorings;
      }
    );

    setTimeout(() => {
     
      this.dataTable = new DataTable('#DossierSponsorings');
     
    }, 200);
  }
 

}
