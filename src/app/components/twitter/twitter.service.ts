import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  twitterUrl = 'https://sentinelapplication.herokuapp.com/idTwitterInDB';
  searchTwitterUrl = 'https://sentinelapplication.herokuapp.com/searchTwitter';
  constructor(private http: HttpClient) { }

  checkIdInDataBase(id: string) {
    const params = new HttpParams().set('id', id);
    return this.http.get(this.twitterUrl, {params: params});
  }

  searchIdInApi(id: string) {
    const params = new HttpParams().set('id', id);
    return this.http.get(this.searchTwitterUrl, {params: params})
  }
}
