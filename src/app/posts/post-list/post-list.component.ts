import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() posts: Post[] = [];
  /* posts = [
    { title: 'First Post', content: "The first post's content" },
    { title: 'Second Post', content: "The second post's content" },
    { title: 'Third Post', content: "The third post's content" },
  ]; */

}
