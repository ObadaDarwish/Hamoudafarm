import {Component, OnInit} from '@angular/core';
import {NewsFeedService} from './news-feed.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {GlobalService} from '../global.service';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  NewsFeed: any;
  tempImg:  Array<any> = [];
  imageArray: Array<any> = [];


  constructor(public globalService: GlobalService, private loading: SlimLoadingBarService, private newsfeed: NewsFeedService) {

  }


  ngOnInit() {
    this.loading.start(()=> {
      console.log('loading');
    });
    this.globalService.loadingIndicator = true;
    this.newsfeed.getNewsFeed().subscribe(
      (newsfeed)=> {
        this.NewsFeed = newsfeed;
        for (var x = 0; x < this.NewsFeed.length; x++) {

          // this.tempIMG = this.NewsFeed[x][1];
          // for (var y = 0; y < this.tempIMG.length; y++) {
          //   if (this.tempIMG[y] == '') {
          //     this.tempIMG.splice(y, 1);
          //   } else {
          //     this.img.push(this.tempIMG[y]);
          //   }
          // }
          this.tempImg.push(JSON.parse(this.NewsFeed[x][1]));
        }
        this.imageArray=this.tempImg.reverse();
        this.loading.complete();
        this.globalService.loadingIndicator = false;
      }
      , (error)=> {
        console.log("Can not load Donuts : " + error);
        this.loading.complete();
        this.globalService.loadingIndicator = false;
      }
    );
  }

}
