import {Component, OnInit} from '@angular/core';
import {NewsFeedService} from './news-feed.service';
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
  numbers: number;

  constructor(private newsfeed: NewsFeedService) {

  }

  ngOnInit() {
    this.newsfeed.getNewsFeed().subscribe(
      (newsfeed)=> {
        this.NewsFeed = newsfeed;
        console.log(this.NewsFeed);
        for (var x = 0; x < newsfeed.length; x++) {
          this.temp.push(newsfeed[x][1]);
          this.img.push(this.temp[x].split(","));
          if (this.imgArraylenght < this.img[x].length)
            this.imgArraylenght = this.img[x].length;
        }
        this.numbers = Array(this.imgArraylenght).fill().map((x, i)=>i);
        console.log(this.img);
      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
      }
    );
  }

}
