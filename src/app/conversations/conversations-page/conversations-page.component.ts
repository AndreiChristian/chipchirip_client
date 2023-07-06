import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversations-page',
  templateUrl: './conversations-page.component.html',
  styleUrls: ['./conversations-page.component.sass'],
})
export class ConversationsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => console.log(data));
  }
}
