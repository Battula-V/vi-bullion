import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ApplicationContext } from '../models/application-context.model';


@Injectable({
  providedIn: 'root'
})
export class ApplicationContextService {

  behavoirSubjectObj = new BehaviorSubject(new ApplicationContext());
  applicationContext = this.behavoirSubjectObj.asObservable();

  constructor() { }

  updateApplicationContext(data : ApplicationContext){
    this.behavoirSubjectObj.next(data);
  }

}
