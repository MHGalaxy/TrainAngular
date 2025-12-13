import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostDto} from '../../dtos/post/post.dto';
import {RouterLink} from '@angular/router';
import {catchError} from 'rxjs';

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
      .get<PostDto[]>('https://jsonplaceholder.typicode.co/posts')
      .pipe(
        catchError(error => {
          console.error('API error:', error);
          throw new Error(error);
        })
      )
      .subscribe((result) => {
        this.posts = result;
      });
  }
}
