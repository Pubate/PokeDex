import { Component } from '@angular/core';

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
