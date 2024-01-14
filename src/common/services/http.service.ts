import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewsResponse } from '../interface/newsResponse.interface';
import { BASE_URL, NEWS_API_KEY } from '../config/news.config';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  URL = BASE_URL + "/v2/";
  KEY = NEWS_API_KEY;
  constructor(
    private _httpClient: HttpClient
  ) { }

  getUSTopHeadlines(date: Date = new Date()): Observable<INewsResponse> {
    const formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
    const url = this.URL + 'top-headlines?country=us&apiKey=' + this.KEY + '&from=' + formattedDate;
    return this._httpClient.get<INewsResponse>(url);
  }
}
