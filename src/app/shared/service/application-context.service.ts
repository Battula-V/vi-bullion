import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ApplicationContext } from '../models/application-context.model';


@Injectable({
  providedIn: 'root'
})
export class ApplicationContextService {

  behaviorSubjectObj = new BehaviorSubject(new ApplicationContext());
  applicationContext = this.behaviorSubjectObj.asObservable();

  constructor() { }

  updateApplicationContext(data:ApplicationContext){
    this.behaviorSubjectObj.next(data);
  }

}
