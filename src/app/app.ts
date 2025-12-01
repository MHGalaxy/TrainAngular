import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './layout/header/header';
import {UserList} from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrainAngular');
}
