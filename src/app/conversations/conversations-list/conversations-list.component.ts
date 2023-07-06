import { Component, OnInit } from '@angular/core';
import { ConversationsService } from '../conversations.service';

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.sass'],
})
export class ConversationsListComponent implements OnInit {
  constructor(private conversationsService: ConversationsService) {}

  ngOnInit(): void {
    this.conversationsService.getUserConversations();
  }
}
