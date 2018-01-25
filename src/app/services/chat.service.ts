import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatService {
  chatMessage: ChatMessage;
  messages = [{
    text: 'Hey Rick, Where are we?',
    time: '2018/1/24 23:2:32',
    username: 'Morty C-137'
  }, {
    text: 'Looks like we\'re in a parallel universe where everything exists in a chat app?',
    time: '2018/1/24 23:2:34',
    username: 'Rick C-137'
  }, {
    text: 'Aw geez, Rick. I don\'t feel so good about this...',
    time: '2018/1/24 23:2:38',
    username: 'Morty C-137'
  }];
  userList = [
    {
      'username': 'anonymous-user',
      'status': 'Available'
    }, {
      'username': 'Rick C-137',
      'status': 'Away'
    }, {
      'username': 'Morty C-137',
      'status': 'Away'
    }
  ];

  constructor() { }

}
