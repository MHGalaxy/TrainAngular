import { Injectable } from '@angular/core';
import {CourseDto} from '../dtos/course/course.dto';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private courses: CourseDto[] = [
    {
      id: 1,
      title: 'Mastering Angular Fundamentals',
      description: 'Learn every core concept of Angular including components, services, routing, observables, and real-world project structure.',
      author: 'Sarah Johnson',
      imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
    },
    {
      id: 2,
      title: 'Full Stack Web Development with Node.js',
      description: 'Build scalable backend applications using Node.js, Express, MongoDB, and modern JavaScript best practices.',
      author: 'David Williams',
      imageSrc: 'https://images.unsplash.com/photo-1521790361543-f645cf042ec4'
    },
    {
      id: 3,
      title: 'Modern JavaScript from Zero to Hero',
      description: 'A complete JavaScript bootcamp covering ES6+, async programming, DOM manipulation, and architectural patterns.',
      author: 'Michael Brown',
      imageSrc: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159'
    },
    {
      id: 4,
      title: 'Responsive Web Design & CSS Mastery',
      description: 'Master Flexbox, Grid, animations, layouts, and build stunning responsive websites from scratch.',
      author: 'Emma Stone',
      imageSrc: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f'
    },
    {
      id: 5,
      title: 'TypeScript for Professional Developers',
      description: 'Learn TypeScript deeply with real-world patterns, advanced typing, generics, interfaces, and Angular integrations.',
      author: 'Lucas Anderson',
      imageSrc: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
    },
    {
      id: 6,
      title: 'Database Design & SQL Masterclass',
      description: 'Become confident with relational database design, SQL queries, normalization, indexing, and optimization.',
      author: 'Sophia Carter',
      imageSrc: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67'
    }
  ]

  getAllCourses(): CourseDto[] {
    return this.courses;
  }

  addCourse(newCourse: NewCourseDto){
    const nextId = this.courses.length > 0
      ? Math.max(...this.courses.map(c => c.id)) + 1
      : 1;

    const courseToAdd: CourseDto = {
      id: nextId,
      ...newCourse
    };

    this.courses.push(courseToAdd);
  }

}

type NewCourseDto = Omit<CourseDto, 'id'>;
