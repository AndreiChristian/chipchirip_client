import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserConversations() {
    this.http
      .get(`${environment.apiUrl}/conversations/user/${this.authService.getId()}`)
      .subscribe((data) => console.log(data));
  }
}
