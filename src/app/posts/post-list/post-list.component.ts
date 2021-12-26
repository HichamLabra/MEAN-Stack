import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts: { title: string, content: string }[] = [];
  /* posts = [
    { title: 'First Post', content: "The first post's content" },
    { title: 'Second Post', content: "The second post's content" },
    { title: 'Third Post', content: "The third post's content" },
  ]; */

}
