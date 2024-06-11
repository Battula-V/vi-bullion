import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClientObj : HttpClient) { 

  }

 
  
  departmentAddApi(body:any){
    return this.httpClientObj.post("http://127.0.0.1:8000/api/add-department",body);
  }

  departmentGetApi(){
    return this.httpClientObj.get("http://127.0.0.1:8000/api/get-department");
  }

  // superAdminAddApi(body:any){
  //   return this.httpClientObj.post("http://127.0.0.1:8000/api/add-super-admin",body);
  // }

  // superAdminGetApi(){
  //   return this.httpClientObj.get("http://127.0.0.1:8000/api/get-super-admin");
  // }


  // employeeAddApi(body:any){
  //   return this.httpClientObj.post("http://127.0.0.1:8000/api/add-employees",body);
  // }

  // employeeGetApi(){
  //   return this.httpClientObj.get("http://127.0.0.1:8000/api/get-employees");
  // }

  designitionAddApi(body:any){
    return this.httpClientObj.post("http://127.0.0.1:8000/api/add-designition", body);
  }

  designitionGetApi(){
    return this.httpClientObj.get("http://127.0.0.1:8000/api/get-designition");
  }

  usersAddApi(body:any){
    return this.httpClientObj.post("http://127.0.0.1:8000/api/add-users",body);
  }

   usersGetApi(role:any){
  //  let  httpParamsObj = new HttpParams();
  //  httpParamsObj.set("role","Admin");
   return this.httpClientObj.get("http://127.0.0.1:8000/api/get-users?role="+role);
  }

}
