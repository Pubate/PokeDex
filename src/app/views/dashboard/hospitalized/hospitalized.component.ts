import { Component, Input, OnInit } from '@angular/core';
import { iCovid } from 'src/app/model/covid.interface';
import { Covid } from 'src/app/model/covid.model';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-hospitalized',
  templateUrl: './hospitalized.component.html',
  styleUrls: ['./hospitalized.component.scss']
})
export class HospitalizedComponent implements OnInit {

  @Input() new:number = 0
  @Input() total:number = 0
  
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.covidService.getCovidStatistics().subscribe(data => {
      this.new = data.NewHospitalized
      this.total = data.Hospitalized
    })
  }

}
