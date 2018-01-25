import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private chat: ChatService,
    private router: Router
  ) { }

  private handle: string;


  ngOnInit() {
  }

}
