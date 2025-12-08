import {Component, OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { GridReadyEvent } from 'ag-grid-community';
import {UserDto} from '../../dtos/user/user.dto';
import {UserService} from '../../servises/user.service';

@Component({
  selector: 'app-user-list',
  imports: [
    AgGridAngular
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: UserDto[] = [];

  constructor(private userService: UserService) {
  }

  defaultColDef: ColDef = {
    flex: 1,         // <-- THIS makes columns expand to fill available width
    resizable: true, // optional
  };

  colDefs: ColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'First Name' },
    { field: 'lastName', headerName: 'Last Name' },
    { field: 'email', headerName: 'Email' },
  ];

  ngOnInit() {

  }

  onGridReady(params: GridReadyEvent): void {
    this.users = this.userService.getAllUsers();
  }
}


