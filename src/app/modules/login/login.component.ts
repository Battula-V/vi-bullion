import { Component } from '@angular/core';  
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApplicationContextService} from "../../shared/services/application-context.service";
import { ApplicationContext } from "../../shared/models/application-context.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {   

  loginGroup = new FormGroup({

    email : new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]),

    password : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])

  });
  

  applicationContextObj = new ApplicationContext();



  constructor(
              private toastr : ToastrService ,
              private applicationContextServiceObj : ApplicationContextService,
              private routerObj : Router
            ){

    

  }

  login(){
    let dataOne =this.loginGroup.value;
    console.log(typeof(dataOne));
    console.log(dataOne);
    console.log(dataOne.email);
    console.log(dataOne.password);
  }


}
