import { Component, OnInit } from '@angular/core';
import { DummyHttpRequestService } from '../services/dummy-http-request.service';

@Component({
  selector: 'app-dummy-data',
  templateUrl: './dummy-data.component.html',
  styleUrls: ['./dummy-data.component.css']
})
export class DummyDataComponent implements OnInit {
  singleData : any;
  multipleData:any;
  singleDataErrorMessage: any;
  multipleDataErrorMessage:any;
  constructor(
    private dummyData: DummyHttpRequestService
  ) { }

  ngOnInit(): void {
  }

  getSignleData(Id:string){
    this.dummyData.getSingleData(Id).then((res)=>{
      this.singleData = res;
    }).catch(rej=>{
      this.singleDataErrorMessage = rej;
    })
  }

  getMultipleData(){
    this.dummyData.getListOfAlldata().subscribe(data=>{
      this.multipleData = data;
    },(error)=>{
      this.multipleDataErrorMessage = error;
    })
  }

}
