import { Component, OnInit } from '@angular/core';
import { FilmService } from './films/film.service';
import { Film } from './films/film';
import { UserService } from './users/user.service';
import { User } from './users/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Film club';
  private films: Film[];
  private users: User[];  

  constructor(
    private userService: UserService,
    private filmService: FilmService
  ) { }

  ngOnInit(): void { }

  public async clicked(): Promise<void> {
    this.users = await this.userService.list();
  }
}
