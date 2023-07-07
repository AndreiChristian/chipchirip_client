import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  tap,
} from 'rxjs';
import { Message } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  private MessageSubject = new BehaviorSubject<Message[]>(null);
  public messages$: Observable<Message[]> = this.MessageSubject.asObservable();

  private LoadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.LoadingSubject.asObservable();

  postMessage(message: Message): Subscription {
    return this.http
      .post(`${environment.apiUrl}/messages`, message)
      .pipe(
        tap(() => {
          this.LoadingSubject.next(true);
        })
      )
      .subscribe({
        error: (err) => {
          this.LoadingSubject.next(false);

          console.log(err);
        },
      });
  }

  getMessages(conversationId: number): Subscription {
    return this.http
      .get<Message[]>(`${environment.apiUrl}/conversations/${conversationId}`)
      .pipe(tap(() => this.LoadingSubject.next(true)))
      .subscribe({
        next: (value) => {
          this.MessageSubject.next(value);
          this.LoadingSubject.next(false);
        },
        error: (err) => {
          console.error(err);
          this.LoadingSubject.next(false);
        },
      });
  }
}
