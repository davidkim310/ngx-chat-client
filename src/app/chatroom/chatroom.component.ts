import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private chatContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scroll();
  }
}
