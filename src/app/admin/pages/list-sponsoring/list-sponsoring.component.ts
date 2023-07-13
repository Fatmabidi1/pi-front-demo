import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { DataTable } from 'simple-datatables';
import { DossierSponsoring, Pack } from 'src/app/models/sponsoring';
import { SponsoringService } from 'src/app/services/sponsoring.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-list-sponsoring',
  templateUrl: './list-sponsoring.component.html',
  styleUrls: ['./list-sponsoring.component.scss']
})
export class ListSponsoringComponent implements OnInit {

  DossierSponsorings: DossierSponsoring[] ;
  @ViewChild('modal') modal: any; // Référence au modal actuel
  @ViewChild('modal2') modal2: any; // Référence au nouveau modal



  dataTable: DataTable;
  selectedSponsoring: DossierSponsoring;

  constructor(public sponsoringService:SponsoringService,


              private modalService: NgbModal) { }



  ngOnInit(): void {
    this.sponsoringService.getAllDossierSponsoring().subscribe(
      (DossierSponsorings: DossierSponsoring[]) => {
        this.DossierSponsorings = DossierSponsorings;
      }
    );


  }

  selectItem(sponsoring: DossierSponsoring, content: TemplateRef<any>) {
    this.selectedSponsoring = sponsoring;
    console.log(this.selectedSponsoring.pack_list);
    this.modalService.open(content , {size : 'lg'});
  }

  closeAndOpenModal2() {
    this.modal.close(); // Ferme le modal actuel

    // Ouvre le nouveau modal
    this.modalService.open(this.modal2, { ariaLabelledBy: 'modal2-title' });
  }


}
