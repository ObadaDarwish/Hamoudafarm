import {Component, OnInit} from '@angular/core';
import {NewsFeedService} from './news-feed.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  NewsFeed: any;
  temp: Array<any> = [];
  img: Array<any> = [];
  imgArraylenght: number = 0;
  numbers: Array<number>;

  constructor(private loading:SlimLoadingBarService,private newsfeed: NewsFeedService) {

  }

  ngOnInit() {
    this.loading.start(()=>{
      console.log('loading');
    });
    this.newsfeed.getNewsFeed().subscribe(
      (newsfeed)=> {
        this.NewsFeed = newsfeed;
        for (var x = 0; x < newsfeed.length; x++) {
          this.temp.push(newsfeed[x][1]);
          this.img.push(this.temp[x].split(","));
          if (this.imgArraylenght < this.img[x].length)
            this.imgArraylenght = this.img[x].length;
        }
        this.numbers = Array(this.imgArraylenght).fill(this.imgArraylenght).map((x, i)=>i);
        this.loading.complete();
      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
        this.loading.complete();
      }
    );
  }

}
