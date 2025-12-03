import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CreatePostDto} from '../../dtos/post/create-post.dto';
import {HttpClient} from '@angular/common/http';
import {PostDto} from '../../dtos/post/post.dto';

@Component({
  selector: 'app-create-post',
  imports: [
    FormsModule
  ],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  post: CreatePostDto = {
    title: '',
    body: '',
    userId: 0
  };

  isValid = false;

  constructor(private httpClient: HttpClient) {

  }

  createPost(e: Event) {
    e.preventDefault();

    this.isValid =
      this.post.title.trim().length > 0 &&
      this.post.body.trim().length > 0 &&
      this.post.userId != 0;

    if (!this.isValid) {
      alert('Please enter all information.');
      return;
    }

    this.httpClient.post<PostDto>('https://jsonplaceholder.typicode.com/posts', this.post)
      .subscribe(result => {
        console.log(result);
      });
  }
}
