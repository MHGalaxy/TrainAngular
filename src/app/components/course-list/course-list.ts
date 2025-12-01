import { Component } from '@angular/core';
import {CourseDto} from '../../dtos/course/course.dto';
import {CourseService} from '../../servises/course.service';
import {CreateCourse} from '../create-course/create-course';
import {CourseItem} from '../course-item/course-item';

@Component({
  selector: 'app-course-list',
  imports: [
    CreateCourse,
    CourseItem
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses: CourseDto[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.getAllCourses();
  }

  handleCreateCourse(e: CourseDto) {
    this.courseService.addCourse(e);
  }
}
