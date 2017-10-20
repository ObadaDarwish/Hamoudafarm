import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sort'})

export class sortNewsFeed implements PipeTransform {


  transform(posts: any): any {
    if (posts) {
      return posts.sort(function (PostA, PostB) {
        let postA = PostA[4];
        let postB = PostB[4];

        if (postA > postB) {
          return -1;
        } else if (postA < postB) {
          return 1;
        } else {
          return 0;
        }
      });
    }

  }
}
