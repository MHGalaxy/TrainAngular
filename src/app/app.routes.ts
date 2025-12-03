import {Routes} from '@angular/router';
import {UserList} from './components/user-list/user-list';
import {CourseList} from './components/course-list/course-list';
import {CourseDetails} from './components/course-details/course-details';
import {PostList} from './components/post-list/post-list';
import {CreatePost} from './components/create-post/create-post';

export const routes: Routes = [
  {path: 'users', component: UserList},
  {path: 'courses', component: CourseList},
  {path: 'courses/:id', component: CourseDetails},
  {path: 'posts', component: PostList},
  {path: 'create-post', component: CreatePost},
];
