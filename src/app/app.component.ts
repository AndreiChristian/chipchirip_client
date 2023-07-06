import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private socket: SocketService) {}

  ngOnInit(): void {
    // this.socket.listen('connect').subscribe((data) => console.log(data));
  }
}
