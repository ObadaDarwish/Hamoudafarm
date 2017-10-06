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

  isImageLoaded: boolean=false;
  ImageIndex: any;
  tempIMG: any;

  constructor(private loading: SlimLoadingBarService, private gallery: GalleryService) {
    this.temp = [];
    this.img = [];

  }

  ngOnInit() {
    this.loading.start(()=> {
      console.log('loading')
    });
    this.gallery.getGallery().subscribe(
      (gallery)=> {
        this.Gallery = gallery;
        for (var x = 0; x < this.Gallery.length; x++) {

          // this.temp.push(gallery[x][0]);//fady el temp
          this.tempIMG = this.Gallery[x][0].split(",");
          for (var y = 0; y < this.tempIMG.length; y++) {
            if (this.tempIMG[y] == '') {
              this.tempIMG.splice(y, 1);
            } else {
              this.img.push(this.tempIMG[y]);
            }
          }

           this.tempIMG = [];

        }

        console.log(this.img);
        this.loading.complete();
        this.isImageLoaded = true;
      }
      , (error)=> {
        console.log("Can not load Gallery : " + error);
        this.loading.complete();
        this.isImageLoaded = false;
      }
    );
  }



  enlarge(imageIndex) {
    console.log('boom');
    this.enlargeImage.config.backdrop = false;
    this.enlargeImage.show();

    this.ImageIndex = imageIndex;
  }
}
