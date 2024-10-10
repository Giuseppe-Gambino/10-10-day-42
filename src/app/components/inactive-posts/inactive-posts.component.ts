import { Component } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { Root } from '../../modules/root';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((response) => {
        let postsAc = response.posts.filter((post) => post.active === false);

        this.postArr = postsAc.slice(0, 4);
        // this.postArr.push(response.posts[i]);
        console.log(this.postArr);
      });
  }
}
