import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConversationsService } from '../conversations.service';
import { Observable, Subscription } from 'rxjs';
import { DirectConversation } from 'src/app/models';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.scss'],
})
export class ConversationsListComponent implements OnInit, OnDestroy {
  constructor(
    private conversationsService: ConversationsService,
    private authService: AuthService
  ) {}

  subscription: Subscription;
  loading$: Observable<boolean>;
  conversations$: Observable<DirectConversation[]>;
  userId: number;

  ngOnInit(): void {
    this.userId = this.authService.getId();
    this.loading$ = this.conversationsService.loading$;
    this.subscription = this.conversationsService.getUserConversations();
    this.conversations$ = this.conversationsService.conversationList$;
    this.conversations$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
