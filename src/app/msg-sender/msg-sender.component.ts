import { Component, OnInit } from '@angular/core';
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-msg-sender',
  templateUrl: './msg-sender.component.html',
  styleUrls: ['./msg-sender.component.css']
})
export class MsgSenderComponent implements OnInit {

  constructor(
    private messageService : MsgService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(msg:string){
    this.messageService.sendMessage(msg);
  }

}
