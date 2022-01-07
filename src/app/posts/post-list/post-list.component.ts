import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy{

  /* posts = [
    { title: 'First Post', content: "The first post's content" },
    { title: 'Second Post', content: "The second post's content" },
    { title: 'Third Post', content: "The third post's content" },
  ]; */
  posts: Post[] = [];
  postsSub: Subscription = new Subscription;

  constructor(public postsService: PostService) {}

  ngOnInit() {
    this.posts = this.postsService.getPost();
    this.postsSub =  this.postsService.getPostUpdateListener().subscribe( (posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
      this.postsSub.unsubscribe();
  }
}
