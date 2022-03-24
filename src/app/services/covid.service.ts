import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCovid } from '../model/covid.interface';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidStatistics() {
    return this.http.get<iCovid>('https://static.easysunday.com/covid-19/getTodayCases.json')
  }
}
