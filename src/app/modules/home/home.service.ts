import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClientObj : HttpClient) { 

  }

 
  
  departmentAddApi(body:any){
    return this.httpClientObj.post("http://127.0.0.1:8000/api/add-department", body);
  }

  
}
