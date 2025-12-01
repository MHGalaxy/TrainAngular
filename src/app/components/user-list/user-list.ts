import {Component, OnInit} from '@angular/core';
import {UserDto} from '../../dtos/user/user.dto';
import {UserService} from '../../servises/user.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: UserDto[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
}
