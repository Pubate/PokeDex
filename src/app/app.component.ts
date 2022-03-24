import { Component } from '@angular/core';
import { iCovid } from './model/covid.interface';
import { Covid } from './model/covid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  time = new Date();

  constructor() { }

  ngOnInit() {
    this.timer()
  }

  timer() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
