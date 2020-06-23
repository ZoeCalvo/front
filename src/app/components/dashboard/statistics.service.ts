import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  statisticsUrl = 'https://sentinelapplication.herokuapp.com/statistics';
  constructor(private http: HttpClient) { }

  getStatisticsData(id: string) {
    const params = new HttpParams()
      .set('id', id)
    return this.http.get(this.statisticsUrl, {params: params});
  }
}
