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
  posts: Post[] = [];
  postsSub: Subscription = new Subscription;

  constructor(public postsService: PostService) {}

  ngOnInit() {
    this.postsService.getPost();
    this.postsSub =  this.postsService.getPostUpdateListener().subscribe( (posts: Post[]) => {
      this.posts = posts;
    });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
      this.postsSub.unsubscribe();
  }
}
