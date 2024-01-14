import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { IArticle, INewsResponse } from 'src/common/interface/newsResponse.interface';
import { HttpService } from 'src/common/services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  private _subs!: Subscription;
  articles!: IArticle[];
  selectedDate: Date = new Date();
  constructor(
    private _http: HttpService,
  ) {}
  
  private getTodaysNews() {
    // this._subs = interval(180000).subscribe(() => {
      this.onDateChange(new Date());
    // })
  }

  private getNewsDate(date: Date) {
    return this._http.getUSTopHeadlines(date).subscribe({
      next: (data: INewsResponse) => {
        this.articles = data.articles;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  ngOnInit() {
    this.getTodaysNews();
  }

  onDateChange(date: Date) {
    this.getNewsDate(date);
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
