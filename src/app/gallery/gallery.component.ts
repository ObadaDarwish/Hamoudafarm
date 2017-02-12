import {Component, OnInit, ViewChild} from '@angular/core';
import {GalleryService} from './gallery.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {ModalDirective} from 'ng2-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @ViewChild('enlargeImage') public enlargeImage: ModalDirective;

  Gallery: any;
  temp: Array<any>;
  img: Array<any>;
  imgArraylenght: number = 0;
  numbers: Array<number>;
  spinner: boolean;
  ImageIndex: any;

  constructor(private loading: SlimLoadingBarService, private gallery: GalleryService) {
    this.temp = [];
    this.img = [];
    this.spinner = true;
  }

  ngOnInit() {
    this.loading.start(()=> {
      console.log('loading')
    });
    this.gallery.getGallery().subscribe(
      (gallery)=> {
        this.Gallery = gallery;
        for (var x = 0; x < gallery.length; x++) {
          this.temp.push(gallery[x][0]);
          this.img.push(this.temp[x].split(","));
          if (this.imgArraylenght < this.img[x].length) {
            this.imgArraylenght = this.img[x].length;
          }
        }
        this.numbers = Array(this.imgArraylenght).fill(this.imgArraylenght).map((x, i)=>i);
        this.loading.complete();
      }
      , (error)=> {
        console.log("Can not load Gallery : " + error);
        this.loading.complete();
      }
    );
  }

  onLoad() {
    this.spinner = false;
  }

  enlarge(imageIndex) {
    this.enlargeImage.config.backdrop = false;
    this.enlargeImage.show();

this.ImageIndex=imageIndex;
  }
}
