import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostDto} from '../../dtos/post/post.dto';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [
    RouterLink
  ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {

  posts: PostDto[] = [];

  constructor(protected httpClient: HttpClient) {
    httpClient
      .get<PostDto[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result) => {
        this.posts = result;
      });
  }
}
