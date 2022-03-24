import { Component, Input, OnInit } from '@angular/core';
import { iCovid } from 'src/app/model/covid.interface';
import { Covid } from 'src/app/model/covid.model';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.scss']
})
export class RecoveredComponent implements OnInit {

  @Input() new:number = 0
  @Input() total:number = 0

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.covidService.getCovidStatistics().subscribe(data => {
      this.new = data.todayRecovered
      this.total = data.recovered
    })
  }

}
