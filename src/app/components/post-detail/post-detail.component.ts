import { ActivatedRoute, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { Root } from '../../modules/root';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  post!: Ipost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      fetch('db.json')
        .then((response) => <Promise<Root>>response.json())
        .then((response) => {
          const arrayPosts = response.posts;

          const postDetail = arrayPosts.find((post) => post.id == params['id']);
          if (postDetail) {
            this.post = postDetail;
            console.log(this.post);
          } else {
            console.log('trimone');
          }
        });
    });
  }
}
