import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, tap } from 'rxjs';
import { DirectConversation, User } from '../models';
import { environment } from 'environments/environment';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  veryDummyId: number = 8;

  users$: Observable<User[]> = new Observable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.users$ = this.http
      .get<User[]>('http://localhost:3000/api/users/')
      .pipe(
        map((users) =>
          users.filter((user) => user.id !== this.authService.getId())
        )
      );
  }

  createNewConversation(user_2: number) {
    const newConversation: DirectConversation = {
      user_1_id: this.authService.getId(),
      user_2_id: user_2,
    };

    this.http
      .post(`${environment.apiUrl}/conversations`, newConversation)
      .subscribe((data) => console.log(data));
  }
}
