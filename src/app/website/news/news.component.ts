import { Component, OnInit } from '@angular/core';
import { News_Service } from 'src/app/shared/service/news_Service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any = [];
  lastNews: any;
  constructor(
    private newsService: News_Service
  ) {
    this.getNews();
   }
   getNews() {
     this.newsService.getAll().subscribe( result => {
        this.news = result.json();
        const a = this.news.length - 1;
        this.lastNews = this.news[a];
        console.log(this.lastNews);

     });
   }

  ngOnInit() {
  }

}
