import {Component, EventEmitter, Output} from '@angular/core';
import {CourseDto} from '../../dtos/course/course.dto';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-course',
  imports: [
    FormsModule
  ],
  templateUrl: './create-course.html',
  styleUrl: './create-course.css',
})
export class CreateCourse {
  course: CourseDto={
    id: 0,
    title: '',
    description: '',
    author: '',
    imageSrc: '',
  }

  isValid = false;

  @Output('course')
  createCourseEvent: EventEmitter<CourseDto> = new EventEmitter();

  createCourse(e: Event){
    e.preventDefault();

    this.isValid =
      this.course.title.trim().length > 0 &&
      this.course.description.trim().length > 0 &&
      this.course.author.trim().length > 0 &&
      this.course.imageSrc.trim().length > 0;

    if (!this.isValid) {
      alert('Please enter all information.');
      return;
    }

    this.createCourseEvent.emit(this.course);
  }
}
