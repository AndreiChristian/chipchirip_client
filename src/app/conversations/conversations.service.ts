import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { DirectConversation } from '../models';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversationsService {
  private LoadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.LoadingSubject.asObservable();

  private ConversationsListSubject = new BehaviorSubject<DirectConversation[]>(
    null
  );
  public conversationList$ = this.ConversationsListSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserConversations() {
    return this.http
      .get<DirectConversation[]>(
        `${environment.apiUrl}/conversations/user/${this.authService.getId()}`
      )
      .pipe(tap(() => this.LoadingSubject.next(true)))
      .subscribe({
        next: (value) => {
          this.ConversationsListSubject.next(value);
          this.LoadingSubject.next(false);
        },
        error: (err) => {
          console.error(err);
          this.LoadingSubject.next(false);
        },
      });
  }

  getOneConversation() {
    this.http
      .get<DirectConversation[]>(
        `${environment.apiUrl}/conversations/user/${this.authService.getId()}`
      )
      .pipe(tap(() => this.LoadingSubject.next(true)))
      .subscribe({
        next(value) {
          this.ConversationsListSubject.next(value);
          this.LoadingSubject.next(false);
        },
        error(err) {
          console.error(err);
          this.LoadingSubject.next(false);
        },
      });
  }
}
