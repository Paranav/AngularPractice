import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgReceiverComponent } from './msg-receiver.component';

describe('MsgReceiverComponent', () => {
  let component: MsgReceiverComponent;
  let fixture: ComponentFixture<MsgReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgReceiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
