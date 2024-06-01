import { Component } from '@angular/core';
import { ApplicationContextService } from "../../shared/services/application-context.service";
import { ApplicationContext } from 'src/app/shared/models/application-context.model';
import { Router } from "@angular/router";
import { ROUTES } from 'src/app/shared/constants/application-data';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private applicationContextServiceObj : ApplicationContextService , private routerObj : Router , private homeServiceObj:HomeService){
    this.applicationContextServiceObj.applicationContext.subscribe(
      (res : ApplicationContext) => {
        console.log(res.loginStatus);
        if(!res.loginStatus){
          //this.routerObj.navigate([ROUTES.LOGIN]);
        }
      }
    );
  }

  ngOnInit(){
    // this.homeServiceObj.departmentAddApi({});
  }

}
