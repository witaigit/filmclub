import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public readonly displayedColumns: string[] = ['id', 'name'];
  public dataSource: User[];

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.userService.list();
  }
}