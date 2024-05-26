import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClientObj : HttpClient) {
    
  }

  login(email : any , password : any){
    return this.httpClientObj.get(`http://127.0.0.1:8000/api/users?email=${email}&password=${password}`); 
  }
}
