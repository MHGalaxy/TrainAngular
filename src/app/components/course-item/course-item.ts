import {Component, Input} from '@angular/core';
import {CourseDto} from '../../dtos/course/course.dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-item',
  imports: [],
  templateUrl: './course-item.html',
  styleUrl: './course-item.css',
})
export class CourseItem {

  constructor(private router: Router) {
  }

  @Input("course")
  course: CourseDto | undefined;

  showDetails(id: number | undefined) {
    this.router.navigate(['courses', id]);
  }
}
