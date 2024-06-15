import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginOne={
     "email":"kkh@gmail.com",
      "password":"el@567"
  }

  constructor(private httpClientObj : HttpClient) {
    
  }
  

  login(body:any){
    // let httpParamsObj=new HttpParams();
    // httpParamsObj.set("email password","kkh@gmail.com el@567");
    return this.httpClientObj.post("http://127.0.0.1:8000/api/get-login",body); 
  }
}
