import { Component, Input, OnInit } from '@angular/core';
import { iCovid } from 'src/app/model/covid.interface';
import { Covid } from 'src/app/model/covid.model';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-dead',
  templateUrl: './dead.component.html',
  styleUrls: ['./dead.component.scss']
})
export class DeadComponent implements OnInit {

  @Input() new:number = 0
  @Input() total:number = 0

  covid: iCovid = new Covid();
  
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.covidService.getCovidStatistics().subscribe(data => {
      this.covid = data
      this.new = data.todayDeaths
      this.total = data.deaths
    })
  }

}
