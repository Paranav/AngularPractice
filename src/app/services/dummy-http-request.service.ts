import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { promise } from 'selenium-webdriver';
import { resolve } from 'node:path';
import { rejects } from 'node:assert';

@Injectable({
  providedIn: 'root'
})
export class DummyHttpRequestService {

  constructor(
    private _http: HttpClient
  ) { }

  getListOfAlldata(){
   return this._http.get("http://dummy.restapiexample.com/api/v1/employees");
  }
  getSingleData(Id:String){
    let data1;
    this._http.get("http://dummy.restapiexample.com/api/v1/employees/"+Id)
    .subscribe(data => data1 = data);

    if(data1){
      return new Promise((resolve)=>{
        resolve(data1);
      })
    }
    else{
      return new Promise((resolve,rejects)=>{
        rejects("Data is not available")
      })
    }
  }
}
