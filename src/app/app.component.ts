import { Component } from '@angular/core';
import { iCovid } from './model/covid.interface';
import { Covid } from './model/covid.model';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Covid today';
  isLoading = false
  time = new Date();
  covid: iCovid = new Covid();

  constructor(private covidService: CovidService) { }

  ngOnInit() {
    this.timer()
  }

  timer() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  reload() {
    if (!this.isLoading) {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false;
      }, 1000)
    }
  }
}
