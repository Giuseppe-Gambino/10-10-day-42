import { Component } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { Root } from '../../modules/root';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((response) => {
        let postsAc = response.posts.filter((post) => post.active === true);

        this.postArr = postsAc.slice(0, 4);
        // this.postArr.push(response.posts[i]);
        console.log(this.postArr);
      });
  }
}
