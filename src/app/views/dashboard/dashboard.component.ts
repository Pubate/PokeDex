import { Component, OnInit } from '@angular/core';
import { iCovid } from 'src/app/model/covid.interface';
import { Covid } from 'src/app/model/covid.model';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Covid today';
  time = new Date();
  covid: iCovid = new Covid();

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.timer()
    this.loadCovidData()
  }

  loadCovidData() {
    this.covidService.getCovidStatistics().subscribe(data => {
      this.covid = data
    })
  }

  timer() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
