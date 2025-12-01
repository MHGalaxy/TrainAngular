import {Component, Input} from '@angular/core';
import {CourseDto} from '../../dtos/course/course.dto';

@Component({
  selector: 'app-course-item',
  imports: [],
  templateUrl: './course-item.html',
  styleUrl: './course-item.css',
})
export class CourseItem {
  @Input("course")
  course: CourseDto | undefined;
}
