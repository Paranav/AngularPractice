import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-msg-receiver',
  templateUrl: './msg-receiver.component.html',
  styleUrls: ['./msg-receiver.component.css']
})
export class MsgReceiverComponent implements OnInit, OnDestroy {
  message :string;
  messageReceiver: Subscription;
  constructor(
    private messageService: MsgService
  ) { }

  ngOnInit(): void {
    this.messageReceiver = this.messageService.receiveMessage()
    .subscribe((data)=>{
      this.message = data;
    })
  }

  ngOnDestroy():void{
    this.messageReceiver.unsubscribe();
  }

}
