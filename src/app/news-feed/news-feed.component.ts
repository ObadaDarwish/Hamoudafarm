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
  img: Array<any> = [];
  imageArray: Array<any> = [];

  constructor(private loading: SlimLoadingBarService, private newsfeed: NewsFeedService) {

  }

  tempIMG: any;

  ngOnInit() {
    this.loading.start(()=> {
      console.log('loading');
    });
    this.newsfeed.getNewsFeed().subscribe(
      (newsfeed)=> {
        this.NewsFeed = newsfeed;
        for (var x = 0; x < this.NewsFeed.length; x++) {

          this.tempIMG = this.NewsFeed[x][1].split(",");
          for (var y = 0; y < this.tempIMG.length; y++) {
            if (this.tempIMG[y] == '') {
              this.tempIMG.splice(y, 1);
            } else {
              this.img.push(this.tempIMG[y]);
            }
          }
          this.imageArray.push(this.img);
          this.img = [];
          this.tempIMG = [];
        }
        this.loading.complete();
      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
        this.loading.complete();
      }
    );
  }

}
