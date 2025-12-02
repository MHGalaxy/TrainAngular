import {Routes} from '@angular/router';
import {UserList} from './components/user-list/user-list';
import {CourseList} from './components/course-list/course-list';
import {CourseDetails} from './components/course-details/course-details';

export const routes: Routes = [
  {path: 'users', component: UserList},
  {path: 'courses', component: CourseList},
  {path: 'courses/:id', component: CourseDetails},
];
