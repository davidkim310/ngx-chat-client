import { Component, OnInit } from '@angular/core';
import { ChatroomComponent } from '../chatroom/chatroom.component';
import { FeedComponent } from '../feed/feed.component';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  comment = '';
  message: any = {};
  constructor(
    private chat: ChatService
  ) { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.comment !== '') {
      this.message = {
        username: this.chat.chatHandle,
        time: new Date(),
        text: this.comment
      };
      this.chat.messages.push(this.message);
      this.comment = '';
    }
  }
}
