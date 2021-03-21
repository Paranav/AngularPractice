import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private subject = new Subject<string>();

  constructor() { }

  sendMessage(msg:string){
    this.subject.next(msg);
  }
  receiveMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
