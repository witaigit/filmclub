import { Component, OnInit } from '@angular/core';
import { FilmService } from './films/film.service';
import { HttpClient } from '@angular/common/http';
import { Film } from './films/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Film club';
  private films: Film[];
    
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    console.log("Initialising...");
    this.filmService.list().subscribe(f => console.log(f));
  }

  public clicked(): void {
    console.log("You clicked the button");
  }
}
