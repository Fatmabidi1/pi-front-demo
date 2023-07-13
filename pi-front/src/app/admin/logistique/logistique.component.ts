import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { Logistique } from 'src/app/models/logistique';
import { LogistiqueService } from 'src/app/services/logistique.service';

@Component({
  selector: 'app-logistique',
  templateUrl: './logistique.component.html',
  styleUrls: ['./logistique.component.scss']
})
export class LogistiqueComponent implements OnInit {


  logistiques: Logistique[];
  dataTable: DataTable;

  constructor(private LogistiqueService: LogistiqueService) { }

  ngOnInit(): void {
    this.LogistiqueService.getAllLogistiques().subscribe(logistiques => {
      this.logistiques = logistiques;
      console.log(this.logistiques);
      
      setTimeout(() => {
     
        this.dataTable = new DataTable('#LogistiquesTable');
       
      }, 100);
    });
  }

}
