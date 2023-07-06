import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models';

@Component({
  selector: 'app-conversations-page',
  templateUrl: './conversations-page.component.html',
  styleUrls: ['./conversations-page.component.scss'],
})
export class ConversationsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}


  newMessage: Message = {
    content: '',
    sender_id: '',
    conversation_id: 0,
    group_id: null,
  };

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => (this.newMessage.conversation_id = data['id'])
    );
  }

  postMessage() {
    console.table(this.newMessage);
  }
}
