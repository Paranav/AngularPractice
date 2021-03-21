import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyHttpRequestService {

  constructor(
    private _http: HttpClient
  ) { }

  getListOfAlldata(){
   return this._http.get("https://jsonplaceholder.typicode.com/albums");
  }
  getSingleData(Id:String){
    let data1;
    this._http.get('https://jsonplaceholder.typicode.com/todos/'+Id)
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
