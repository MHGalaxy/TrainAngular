import { Injectable } from '@angular/core';
import {UserDto} from '../dtos/user/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@example.com'
    },
    {
      id: 2,
      firstName: 'David',
      lastName: 'Williams',
      email: 'david.williams@example.com'
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com'
    },
    {
      id: 4,
      firstName: 'Emma',
      lastName: 'Stone',
      email: 'emma.stone@example.com'
    },
    {
      id: 5,
      firstName: 'Lucas',
      lastName: 'Anderson',
      email: 'lucas.anderson@example.com'
    },
    {
      id: 6,
      firstName: 'Sophia',
      lastName: 'Carter',
      email: 'sophia.carter@example.com'
    },
    {
      id: 7,
      firstName: 'Ethan',
      lastName: 'Miller',
      email: 'ethan.miller@example.com'
    },
    {
      id: 8,
      firstName: 'Olivia',
      lastName: 'Davis',
      email: 'olivia.davis@example.com'
    },
    {
      id: 9,
      firstName: 'James',
      lastName: 'Wilson',
      email: 'james.wilson@example.com'
    },
    {
      id: 10,
      firstName: 'Ava',
      lastName: 'Martinez',
      email: 'ava.martinez@example.com'
    }
  ]

  getAllUsers(): UserDto[] {
    return this.users;
  }
}
