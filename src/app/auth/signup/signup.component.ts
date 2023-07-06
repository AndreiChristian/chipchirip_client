import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private http: HttpClient) {}

  newUser: User = {
    email: '',
    username: '',
    password: '',
  };

  createUser() {
    console.table(this.newUser);

    this.http.post('http://localhost:3000/api/auth/register', this.newUser).subscribe((data) => console.log(data));
  }
}
