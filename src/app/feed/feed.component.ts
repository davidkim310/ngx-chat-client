import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  messages: any = [];

  constructor(
    public chat: ChatService
  ) { }

  ngOnInit() {
    this.messages = this.chat.messages;
  }

}
