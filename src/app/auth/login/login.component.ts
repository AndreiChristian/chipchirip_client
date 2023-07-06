import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logUser();
  }

  login() {
    this.authService.login(this.user);
  }
}
