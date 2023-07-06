import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  id = 8;

  getId() {
    return this.id;
  }

  constructor() {}

  login() {}

  register() {}
}
