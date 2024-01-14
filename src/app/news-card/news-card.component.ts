import { Component, Input } from '@angular/core';
import { IArticle } from 'src/common/interface/newsResponse.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() article!: IArticle;
}
