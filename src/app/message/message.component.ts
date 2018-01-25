import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // set input
  @Input() chatMessage: ChatMessage;
  username: string;
  time: Date;
  text: string;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.username = chatMessage.username;
    this.time = chatMessage.time;
    this.text = chatMessage.text;
  }

}
