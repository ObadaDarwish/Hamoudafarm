import {Component, OnInit, ViewChild} from '@angular/core';
import {GalleryService} from './gallery.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  Gallery: any;
  temp: Array<any>;
  img: Array<any>;

  ImageIndex: any;
  tempIMG: any;
  constructor(public globalService: GlobalService, private loading: SlimLoadingBarService, private gallery: GalleryService) {
    this.temp = [];
    this.img = [];

  }

  ngOnInit() {
    this.globalService.loadingIndicator=true;
    this.loading.start(()=> {
      console.log('loading')
    });
    this.gallery.getGallery().subscribe(
      (gallery)=> {
        this.Gallery = gallery;
        console.log(this.Gallery);
        for (var x = 0; x < this.Gallery.length; x++) {
          this.tempIMG=JSON.parse(this.Gallery[x][0]);
          for (var y = 0; y < JSON.parse(this.Gallery[x][0]).length; y++) {
            this.img.push(this.tempIMG[y]);
          }
        }
        this.loading.complete();
        this.globalService.loadingIndicator=false;
      }
      , (error)=> {
        this.globalService.loadingIndicator=false;
        console.log("Can not load Gallery : " + error);
        this.loading.complete();
      }
    );
  }



}
