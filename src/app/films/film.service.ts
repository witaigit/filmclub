import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './film';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly filmsUrl: string = "http://localhost:5000/api/users";

  constructor(private http: HttpClient) { }

  list(): Observable<Film[]> {
    console.log("Getting films...");
    return this.http.get<Film[]>(this.filmsUrl);
  }
}
