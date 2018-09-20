import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly usersUrl: string = "http://localhost:5000/api/users"

  private _users: User[];
  public get users(): User[] {
    return this._users;
  }

  constructor(private http: HttpClient) { }

  public async list(): Promise<User[]> {
    const users = await this.http
      .get<User[]>(this.usersUrl)
      .toPromise();

    this._users = users;
    return users;
  }
}
