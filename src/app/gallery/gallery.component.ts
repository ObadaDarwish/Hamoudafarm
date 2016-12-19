import {Component, OnInit} from '@angular/core';
import {GalleryService} from './gallery.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  Gallery: any;
  temp: Array<any>;
  img: Array<any>;
  imgArraylenght: number = 0;
  numbers: Array<number>;


  constructor(private gallery: GalleryService) {
    this.temp = [];
    this.img = [];
  }

  ngOnInit() {
    this.gallery.getGallery().subscribe(
      (gallery)=> {
        this.Gallery = gallery;
        for (var x = 0; x < gallery.length; x++) {
          this.temp.push(gallery[x][0]);
          this.img.push(this.temp[x].split(","));
          if (this.imgArraylenght < this.img[x].length){
            this.imgArraylenght = this.img[x].length;
        }
        }
        this.numbers = Array(this.imgArraylenght).fill(this.imgArraylenght).map((x, i)=>i);
      }
      , (error)=> {
        console.log("Can not load Gallery : " + error);
      }
    );
  }

}
