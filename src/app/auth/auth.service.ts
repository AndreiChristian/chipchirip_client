import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { User } from '../models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

export interface AuthReponse {
  auth: boolean;
  token: string;
  user?: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  private UserSubject = new BehaviorSubject<User | null>(
    this.localStorage.get('user')
  );
  public user$: Observable<User> = this.UserSubject.asObservable();

  getId(): number | null {
    if (this.isAuthenticated) {
      return this.UserSubject.getValue().id!;
    } else {
      return null;
    }
  }

  login(user: User) {
    return this.http
      .post<AuthReponse>(`${environment.apiUrl}/auth/login`, user)
      .pipe(tap(() => {}))
      .subscribe({
        next: (value) => {
          if (!value.auth) {
            console.error('Authentication failed');
          } else {
            console.log(value);

            this.localStorage.set('token', value.token);
            this.localStorage.set('user', value.user);
            this.UserSubject.next(value.user);
          }
        },
      });
  }

  isAuthenticated(): boolean {
    if (this.UserSubject.getValue()) {
      return true;
    } else {
      return false;
    }
  }

  logUser() {
    console.log(this.UserSubject.getValue());
  }

  register() {}
}
